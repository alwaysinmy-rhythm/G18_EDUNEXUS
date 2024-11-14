import pulp
import random

# Define courses
courses = [f"Course_{i}" for i in range(1, 26)]

# Biased preference generation function
def generate_biased_preferences():
    # Higher chance of popular courses being at the top of the list
    popular_courses = ["Course_1", "Course_2", "Course_3"]
    preferences = random.sample(courses, 5)
    
    # Insert popular courses with a higher likelihood
    if random.random() < 0.7:  # 70% chance to favor popular courses
        preferences[0] = random.choice(popular_courses)
    if random.random() < 0.5:  # 50% chance to favor popular courses
        preferences[1] = random.choice(popular_courses)
    return preferences

# Generate preferences for 100 students and store them in the required format
students = {f"Student_{i}": generate_biased_preferences() for i in range(1, 401)}

# algorithm start form here 
course_limit = 150 # Maximum number of students per course

# Generate preference scores for each student and course
preference_scores = {}
for student, preferences in students.items():
    preference_scores[student] = {course: max(5 - i * 0.5, 0) for i, course in enumerate(preferences)}

# Initialize the optimization problem
prob = pulp.LpProblem("Course_Allocation", pulp.LpMaximize)

# Decision variables
x = {student: {course: pulp.LpVariable(f"x_{student}_{course}", cat="Binary")
               for course in preferences} for student, preferences in students.items()}

# Objective: Maximize total preference score for all students
total_score = {student: pulp.lpSum(preference_scores[student][course] * x[student][course]
                                   for course in preferences)
               for student, preferences in students.items()}
prob += pulp.lpSum(total_score[student] for student in students)

# Constraints
# 1. Each student should get exactly 2 courses
for student in students:
    prob += pulp.lpSum(x[student][course] for course in students[student]) == 2

# 2. Each course should not exceed the course limit
for course in set(course for prefs in students.values() for course in prefs):
    prob += pulp.lpSum(x[student][course] for student in students if course in students[student]) <= course_limit

# 3. Minimize the score difference across students
average_score = pulp.lpSum(total_score[student] for student in students) / len(students)
for student in students:
    prob += total_score[student] >= average_score - 1  # Adjust margin as needed
    prob += total_score[student] <= average_score + 1

# Solve the problem
prob.solve()

# Display results
if pulp.LpStatus[prob.status] == "Optimal":
    print("Optimal Course Allocation:")
    for student in students:
        allocated_courses = [course for course in students[student] if pulp.value(x[student][course]) == 1]
        score = pulp.value(total_score[student])
        print(f"{student} -> {allocated_courses} (Total Score: {score})")
else:
    print("No optimal solution found.")
