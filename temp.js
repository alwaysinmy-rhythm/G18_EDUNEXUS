const students = {
    "Student_1": ["Course_1", "Course_6", "Course_5", "Course_2", "Course_9"],
    "Student_2": ["Course_6", "Course_1", "Course_7", "Course_4", "Course_10"],
    "Student_3": ["Course_7", "Course_6", "Course_8", "Course_3", "Course_9"],
    "Student_4": ["Course_1", "Course_7", "Course_6", "Course_10", "Course_3"],
    "Student_5": ["Course_6", "Course_9", "Course_1", "Course_5", "Course_8"],
    "Student_6": ["Course_1", "Course_6", "Course_4", "Course_7", "Course_10"],
    "Student_7": ["Course_7", "Course_8", "Course_1", "Course_3", "Course_10"],
    "Student_8": ["Course_6", "Course_3", "Course_1", "Course_9", "Course_7"],
    "Student_9": ["Course_1", "Course_10", "Course_6", "Course_5", "Course_8"],
    "Student_10": ["Course_7", "Course_1", "Course_6", "Course_4", "Course_9"],
    "Student_11": ["Course_1", "Course_8", "Course_7", "Course_3", "Course_10"],
    "Student_12": ["Course_6", "Course_7", "Course_2", "Course_1", "Course_8"],
    "Student_13": ["Course_1", "Course_4", "Course_10", "Course_6", "Course_5"],
    "Student_14": ["Course_6", "Course_1", "Course_7", "Course_9", "Course_8"],
    "Student_15": ["Course_7", "Course_10", "Course_1", "Course_6", "Course_3"],
    "Student_16": ["Course_6", "Course_5", "Course_1", "Course_8", "Course_7"],
    "Student_17": ["Course_1", "Course_3", "Course_6", "Course_4", "Course_10"],
    "Student_18": ["Course_7", "Course_1", "Course_6", "Course_10", "Course_5"],
    "Student_19": ["Course_1", "Course_6", "Course_9", "Course_7", "Course_8"],
    "Student_20": ["Course_1", "Course_8", "Course_6", "Course_5", "Course_10"],
    "Student_21": ["Course_7", "Course_1", "Course_6", "Course_3", "Course_9"],
    "Student_22": ["Course_6", "Course_7", "Course_1", "Course_5", "Course_8"],
    "Student_23": ["Course_1", "Course_6", "Course_9", "Course_7", "Course_10"],
    "Student_24": ["Course_7", "Course_10", "Course_1", "Course_6", "Course_3"],
    "Student_25": ["Course_6", "Course_1", "Course_8", "Course_4", "Course_7"],
    "Student_26": ["Course_1", "Course_7", "Course_5", "Course_6", "Course_9"],
    "Student_27": ["Course_1", "Course_8", "Course_7", "Course_10", "Course_3"],
    "Student_28": ["Course_6", "Course_1", "Course_9", "Course_7", "Course_8"],
    "Student_29": ["Course_1", "Course_10", "Course_6", "Course_3", "Course_7"],
    "Student_30": ["Course_7", "Course_6", "Course_1", "Course_9", "Course_8"],
    "Student_31": ["Course_1", "Course_6", "Course_4", "Course_7", "Course_9"],
    "Student_32": ["Course_6", "Course_1", "Course_10", "Course_8", "Course_7"],
    "Student_33": ["Course_7", "Course_3", "Course_1", "Course_6", "Course_9"],
    "Student_34": ["Course_1", "Course_9", "Course_8", "Course_6", "Course_7"],
    "Student_35": ["Course_6", "Course_10", "Course_1", "Course_7", "Course_5"],
    "Student_36": ["Course_1", "Course_7", "Course_6", "Course_3", "Course_10"],
    "Student_37": ["Course_6", "Course_1", "Course_9", "Course_5", "Course_8"],
    "Student_38": ["Course_7", "Course_1", "Course_10", "Course_6", "Course_9"],
    "Student_39": ["Course_1", "Course_8", "Course_6", "Course_7", "Course_5"],
    "Student_40": ["Course_6", "Course_3", "Course_1", "Course_9", "Course_7"],
    "Student_41": ["Course_1", "Course_5", "Course_7", "Course_6", "Course_10"],
    "Student_42": ["Course_7", "Course_1", "Course_8", "Course_6", "Course_4"],
    "Student_43": ["Course_1", "Course_6", "Course_9", "Course_5", "Course_7"],
    "Student_44": ["Course_6", "Course_1", "Course_7", "Course_4", "Course_10"],
    "Student_45": ["Course_1", "Course_6", "Course_8", "Course_7", "Course_3"],
    "Student_46": ["Course_7", "Course_10", "Course_1", "Course_6", "Course_5"],
    "Student_47": ["Course_1", "Course_9", "Course_7", "Course_6", "Course_3"],
    "Student_48": ["Course_6", "Course_1", "Course_7", "Course_10", "Course_4"],
    "Student_49": ["Course_7", "Course_1", "Course_6", "Course_9", "Course_3"],
    "Student_50": ["Course_1", "Course_6", "Course_5", "Course_7", "Course_8"]
};

// Define max seats limit for each course
const maxSeats = 20;
const courseSeats = {};

// Initialize course seats to 0 for each course
Object.values(students).flat().forEach(course => {
    if (!courseSeats[course]) courseSeats[course] = 0;
});

const studentAllocations = {};

// Function to calculate preference score with 0.5 weight increments
function getPreferenceScore(student, course) {
    const index = students[student].indexOf(course);
    if (index !== -1) {
        return 3 - index * 0.5;  // Starts with 3 for the first choice and decreases by 0.5 for each subsequent preference
    }
    return 0; // If the course is not in the student's list, return 0
}

// Function to allocate courses based on preferences
function allocateCourses() {
    for (const student in students) {
        let allocation = [];

        // Try to allocate top preferences
        for (let i = 0; i < students[student].length && allocation.length < 2; i++) {
            const course = students[student][i];
            
            // Check if adding this course would exceed the max seat limit
            if (courseSeats[course] < maxSeats) {
                allocation.push(course);
                courseSeats[course]++;
            }
        }

        studentAllocations[student] = allocation;
    }
}

// Balancing the allocation to minimize preference score difference
function balanceAllocations() {
    const maxIterations = 50;
    let iterations = 0;
    let improved = true;

    while (improved && iterations < maxIterations) {
        improved = false;
        iterations++;

        // Check every pair of students
        for (const studentA in studentAllocations) {
            for (const studentB in studentAllocations) {
                if (studentA === studentB) continue;

                let scoreA = studentAllocations[studentA].reduce((sum, course) => sum + getPreferenceScore(studentA, course), 0);
                let scoreB = studentAllocations[studentB].reduce((sum, course) => sum + getPreferenceScore(studentB, course), 0);
                let initialDifference = Math.abs(scoreA - scoreB);

                // Try swapping courses to minimize score difference, respecting preferences
                for (let i = 0; i < studentAllocations[studentA].length; i++) {
                    for (let j = 0; j < studentAllocations[studentB].length; j++) {
                        const courseA = studentAllocations[studentA][i];
                        const courseB = studentAllocations[studentB][j];

                        // Ensure courses are in each student's preference list
                        if (students[studentA].includes(courseB) && students[studentB].includes(courseA)) {
                            if (courseSeats[courseA] < maxSeats && courseSeats[courseB] < maxSeats) {
                                // Hypothetical swap and calculate new scores
                                const tempAllocA = [...studentAllocations[studentA]];
                                const tempAllocB = [...studentAllocations[studentB]];
                                [tempAllocA[i], tempAllocB[j]] = [courseB, courseA];

                                const newScoreA = tempAllocA.reduce((sum, course) => sum + getPreferenceScore(studentA, course), 0);
                                const newScoreB = tempAllocB.reduce((sum, course) => sum + getPreferenceScore(studentB, course), 0);
                                const newDifference = Math.abs(newScoreA - newScoreB);

                                // If swap improves score, apply it
                                if (newDifference < initialDifference) {
                                    studentAllocations[studentA] = tempAllocA;
                                    studentAllocations[studentB] = tempAllocB;
                                    improved = true;
                                    break;
                                }
                            }
                        }
                    }
                    if (improved) break;
                }
            }
        }
    }
}

// Run the initial allocation
allocateCourses();

// Balance the allocations to minimize preference score difference
balanceAllocations();

// Display the results
console.log("Student Allocations:", studentAllocations);
console.log("Course Seat Counts:", courseSeats);

// Display total preference score for each student
for (const student in studentAllocations) {
    const totalScore = studentAllocations[student].reduce((sum, course) => sum + getPreferenceScore(student, course), 0);
    console.log(`${student} Total Preference Score: ${totalScore}`);
}
