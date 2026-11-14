import type { Assessment, Assignment, Course, DepartmentId, Question, Student } from '../types';

export const departments: DepartmentId[] = ['CSE','ISE','AIML','ECE','ME'];
export const batches = ['2027','2028'] as const;
export const sections = ['A','B'] as const;
const first = ['Aarav','Aditi','Aditya','Aisha','Akash','Akshay','Amrita','Ananya','Aniket','Anirudh','Anjali','Arjun','Arnav','Avni','Bhavya','Charan','Deepa','Dev','Devika','Dhruv','Diya','Gaurav','Harini','Ishaan','Ishita','Jahnavi','Karan','Kavya','Keerthi','Krishna','Lakshmi','Madhav','Manish','Meera','Nandini','Navya','Neha','Nikhil','Nisha','Pooja','Pranav','Prateek','Priya','Rahul','Rhea','Riya','Rohan','Saanvi','Sakshi','Sanjay','Shreya','Siddharth','Sneha','Soham','Tanvi','Tanya','Varun','Vedant','Vidya','Vikram','Yash','Yashasvi','Zoya','Abhinav','Akhila','Darshan','Gayatri','Hemanth','Lavanya','Naveen','Rashmi','Shravan'];
const last = ['Agarwal','Bansal','Bhat','Chandra','Chatterjee','Chauhan','Desai','Ghosh','Gowda','Gupta','Hegde','Iyer','Jain','Joshi','Kapoor','Khanna','Kulkarni','Kumar','Malhotra','Mehta','Menon','Mishra','Mukherjee','Nair','Naik','Patel','Pillai','Prasad','Rao','Reddy','Saxena','Shah','Sharma','Shetty','Singh','Sinha','Subramanian','Trivedi','Varma','Verma','Yadav','Acharya','Bose','Das','Kohli','Rangan','Roy','Sethi'];
const topics = ['Arrays','Strings','Searching','Sorting','Linked Lists','Trees','Graphs','Dynamic Programming','Greedy','Recursion'];
const langs = ['Python','Java','C++','JavaScript','TypeScript'];
const hash = (n:number, salt:number) => ((n * 73 + salt * 41 + 19) % 101);
export const students: Student[] = Array.from({length:332},(_,i)=>{
  const department = departments[i%5]; const batch = batches[Math.floor(i/5)%2]; const section = sections[Math.floor(i/10)%2]; const ix=i+1;
  const needsAttention=ix%9===0; const reasonKind=ix%7; const attempted=18+hash(ix,3)%72; const success=needsAttention&&reasonKind===4?.34+hash(ix,4)/900:.55+hash(ix,4)/300; const solved=Math.min(attempted,Math.round(attempted*success));
  const topicBase=[78,73,68,66,63,58,54,46,50,39]; const languageBase=[77,84,71,63,57];
  return { id:`stu-${String(ix).padStart(3,'0')}`, name:`${first[i%first.length]} ${last[(i*11+Math.floor(i/first.length)*7)%last.length]}`, rollNumber:`${department}${batch.slice(2)}${String(ix).padStart(3,'0')}`, department,batch,section,lastActiveDays:needsAttention?14+hash(ix,8)%10:hash(ix,8)%12,courseProgress:needsAttention&&(reasonKind===1||reasonKind===2||reasonKind===5)?hash(ix,5)%35:52+hash(ix,5)%47,problemsAttempted:attempted,problemsSolved:solved,assessmentAverage:needsAttention&&(reasonKind===3||reasonKind===6)?38+hash(ix,7)%12:58+hash(ix,7)%41,projectsCompleted:hash(ix,9)%4,certificates:hash(ix,10)%4,streak:needsAttention?hash(ix,11)%4:2+hash(ix,11)%17,languages:Object.fromEntries(langs.map((x,j)=>[x,Math.max(25,Math.min(98,languageBase[j]+(hash(ix,j+20)%19)-9))])),topics:Object.fromEntries(topics.map((x,j)=>[x,Math.max(24,Math.min(96,topicBase[j]+(hash(ix,j+30)%17)-8))])) };
});
export const courses: Course[] = [
  {id:'python',title:'Python Basics',description:'Core Python concepts and problem solving.',modules:12,level:'Beginner'},
  {id:'dsa',title:'DSA Foundations',description:'Essential data structures and algorithms.',modules:18,level:'Intermediate'},
  {id:'sql',title:'SQL Essentials',description:'Querying and relational data fundamentals.',modules:10,level:'Beginner'},
  {id:'web',title:'Modern Web Development',description:'Build responsive applications with JavaScript.',modules:16,level:'Intermediate'},
  {id:'java',title:'Java Programming',description:'Object-oriented programming with Java.',modules:14,level:'Beginner'}
];
export const initialAssignments: Assignment[] = [
 {id:'as-1',courseId:'python',department:'CSE',batch:'2027',section:'ALL',start:'2026-08-01',deadline:'2026-12-18',status:'Active'},
 {id:'as-2',courseId:'dsa',department:'ISE',batch:'2027',section:'ALL',start:'2026-08-12',deadline:'2026-12-22',status:'Active'},
 {id:'as-3',courseId:'sql',department:'AIML',batch:'2028',section:'A',start:'2026-08-01',deadline:'2026-11-10',status:'Completed'},
 {id:'as-4',courseId:'web',department:'ECE',batch:'2028',section:'ALL',start:'2026-11-12',deadline:'2027-01-15',status:'Draft'},
 {id:'as-5',courseId:'java',department:'ME',batch:'2027',section:'B',start:'2026-11-01',deadline:'2026-11-18',status:'Active'}
];
export const questions: Question[] = ['Two Sum','Valid Parentheses','Binary Search','Merge Intervals','Tree Height','Graph Paths','Knapsack','Longest Substring','Rotate Array','Coin Change','Linked List Cycle','Course Schedule'].map((title,i)=>({id:`q-${i+1}`,title,topic:topics[i%topics.length],difficulty:(['Easy','Medium','Hard'] as const)[i%3],solveRate:42+hash(i,5)%48}));
export const initialAssessments: Assessment[] = [
 {id:'test-1',title:'DSA Assessment 01',description:'Core data structures checkpoint',department:'CSE',batch:'2027',section:'ALL',start:'2026-10-10T10:00',end:'2026-10-10T12:00',duration:90,status:'Completed',questionIds:['q-1','q-2','q-3'],languages:['Python','Java','C++'],average:74},
 {id:'test-2',title:'Python Skill Test',description:'Python fundamentals',department:'ISE',batch:'2027',section:'ALL',start:'2026-11-14T10:00',end:'2026-11-14T18:00',duration:60,status:'Live',questionIds:['q-1','q-4'],languages:['Python'],average:69},
 {id:'test-3',title:'Placement Prep Mock',description:'Placement readiness assessment',department:'AIML',batch:'2028',section:'A',start:'2026-11-20T09:30',end:'2026-11-20T12:30',duration:120,status:'Scheduled',questionIds:['q-2','q-5','q-6','q-7'],languages:['Python','Java','C++'],average:0},
 {id:'test-4',title:'Strings & Arrays Test',description:'Problem solving sprint',department:'ECE',batch:'2028',section:'ALL',start:'2026-09-24T10:00',end:'2026-09-24T11:30',duration:75,status:'Completed',questionIds:['q-1','q-8','q-9'],languages:['C','C++','Java'],average:67},
 {id:'test-5',title:'Advanced Python',description:'Advanced language concepts',department:'CSE',batch:'2028',section:'B',start:'2026-11-26T14:00',end:'2026-11-26T16:00',duration:90,status:'Draft',questionIds:['q-4','q-7','q-10'],languages:['Python'],average:0}
];
export const engagementTrend = ['Jun','Jul','Aug','Sep','Oct','Nov'].map((month,i)=>({month,active:76+i*3+(i%2),practice:58+i*4+(i%3)}));
export const practiceTrend = ['Jun','Jul','Aug','Sep','Oct','Nov'].map((month,i)=>({month,solved:1180+i*145+(i%2)*90,attempted:1810+i*180+(i%3)*70}));
export const projectCatalog = [
 {name:'Weather App',technology:'JavaScript',assigned:68,started:57,completed:43},
 {name:'Task Manager',technology:'React',assigned:74,started:61,completed:48},
 {name:'REST API',technology:'Node.js',assigned:55,started:44,completed:31},
 {name:'Portfolio Website',technology:'HTML/CSS',assigned:82,started:77,completed:65},
 {name:'Expense Tracker',technology:'TypeScript',assigned:61,started:49,completed:37},
 {name:'Data Analysis Project',technology:'Python',assigned:48,started:39,completed:28}
];

// Immutable deterministic demo seeds. Runtime-created entities live in AppContext.
export const seedStudents=students;
export const seedCourses=courses;
export const seedAssignments=initialAssignments;
export const seedAssessments=initialAssessments;
export const seedProjects=projectCatalog;
export const seedPracticeQuestions=questions;
