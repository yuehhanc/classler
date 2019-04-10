import { CourseObj } from './course';

export const MOCKCOURSES: CourseObj[] = [
    {
        name: 'Courses',
        content: `
    <h3>Getting started</h3>
Welcome to Classler! Classler helps you learn modern coding skills for big tech companies.
`,
        subtopic: ['Time Complexity', 'Array']
    },
    {
        name: 'Courses/Time Complexity',
        content: `
    <h3>Time Complexity</h3>
O(nlogn) is a must.`,
        subtopic: ['O(1)', 'O(n)']
    },
    {
        name: 'Courses/Time Complexity/O(1)',
        content: `
    <h3>O(1)</h3>
O(1) operations take constant time to execute.`,
        subtopic: []
    },
    {
        name: 'Courses/Time Complexity/O(n)',
        content: `
    <h3>O(n)</h3>
O(n) operations have execution times linearly depend on the size of the data.`,
        subtopic: []
    },
    {
        name: 'Courses/Array',
        content: undefined,
        subtopic: ['small', 'big']
    },
    {
        name: 'Courses/Array/small',
        content: undefined,
        subtopic: []
    },
    {
        name: 'Courses/Array/big',
        content: undefined,
        subtopic: []
    },
];