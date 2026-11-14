export type DepartmentId = 'CSE'|'ISE'|'AIML'|'ECE'|'ME';
export type Role = { type:'management'; label:'Management' } | { type:'hod'; department:DepartmentId; label:string };
export type Filters = { department:'ALL'|DepartmentId; batch:'ALL'|'2027'|'2028'; section:'ALL'|'A'|'B'; range:'7'|'30'|'90'|'365'|'all'|'custom'; startDate:string; endDate:string };
export type Student = { id:string; name:string; rollNumber:string; department:DepartmentId; batch:'2027'|'2028'; section:'A'|'B'; lastActiveDays:number; courseProgress:number; problemsAttempted:number; problemsSolved:number; assessmentAverage:number; projectsCompleted:number; certificates:number; streak:number; languages:Record<string,number>; topics:Record<string,number> };
export type Course = { id:string; title:string; description:string; modules:number; level:string };
export type Assignment = { id:string; courseId:string; department:DepartmentId; batch:'2027'|'2028'; section:'ALL'|'A'|'B'; start:string; deadline:string; status?:'Draft'|'Active'|'Completed' };
export type Assessment = { id:string; title:string; description:string; department:DepartmentId; batch:'2027'|'2028'; section:'ALL'|'A'|'B'; start:string; end:string; duration:number; status:'Draft'|'Scheduled'|'Live'|'Completed'; questionIds:string[]; languages:string[]; average:number; controls?:Record<string,boolean> };
export type Question = { id:string; title:string; topic:string; difficulty:'Easy'|'Medium'|'Hard'; solveRate:number };
