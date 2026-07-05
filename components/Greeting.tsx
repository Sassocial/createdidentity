export default function Greeting() {

const hour = new Date().getHours();

let greeting = "Good evening";

if(hour < 12) greeting = "Good morning";

if(hour >=12 && hour <18) greeting = "Good afternoon";

return(

<div>

<h2 className="text-3xl font-semibold">

{greeting} ☕

</h2>

<p className="mt-2 text-[#847B72]">

Everything you need today,
beautifully organised.

</p>

</div>

)

}