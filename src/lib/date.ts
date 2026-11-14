const dateFormatter=new Intl.DateTimeFormat('en-IN',{day:'2-digit',month:'short',year:'numeric'});const timeFormatter=new Intl.DateTimeFormat('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true});
export const formatDate=(value:string|Date)=>dateFormatter.format(new Date(value));
export const formatTime=(value:string|Date)=>timeFormatter.format(new Date(value));
export const formatDateTime=(value:string|Date)=>`${formatDate(value)}, ${formatTime(value)}`;
export const formatRange=(start:string,end:string)=>{const a=new Date(start),b=new Date(end);return a.toDateString()===b.toDateString()?{date:formatDate(a),time:`${formatTime(a)} – ${formatTime(b)}`,full:`${formatDate(a)}, ${formatTime(a)} – ${formatTime(b)}`}:{date:`${formatDate(a)} – ${formatDate(b)}`,time:`${formatTime(a)} – ${formatTime(b)}`,full:`${formatDateTime(a)} – ${formatDateTime(b)}`}};
