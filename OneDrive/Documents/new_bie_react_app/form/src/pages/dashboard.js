import React from "react";
import FloatingEmojiWithHearts from "../components/AnimatedComponents/floatingEmojiWithHearts";

function Dashboard(){
    // make the text dynamic
    // const text = `;    // var text = "hi there"
    return(
        
        <div class=" bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300">
            
            <div class="bg-pink-200 items-center text-center justify-center rounded h-[4vh] w-[80%] mx-[7rem] m-2">
                <p> There are so many things I feel but rarely say, and I want this to be a special way of expressing them to you.💌 </p>
            </div>
            <div class="m-[4rem] mt-0 p-[8px] bg-gray-400 bg-opacity-25 flex items-center justify-center rounded">
                <div class="m-4  w-1/2">
                    <img src="faceHeart.jpg" alt="with lovee"/>
                </div>
                
                <div class="w-1/2 text-2xl m-[1px]">
                    <p>You are my everything – my calm, my strength, and the one who makes me laugh even when I don’t feel like smiling. <br/><br/> With you, I’ve found a love that feels like home, and there’s nothing more I could ever ask for❤️. <br/><br/>  I’ll always be here for you, through the ups and downs, the busy days and quiet nights. You’re not juuust loved, but deeply cherished, supported, and cared for in every possible way.<br/> No matter what comes, I’ve got you, now and always.<br/><br/> Here’s to many more memories🫂, kisses😽, and all the love💝 we share. You’re are loved. <br/> Yours, Sahej </p>
                </div>
            </div>

            <div className="flex flex-row items-center h-[12vh] w-[100%] bg-red-500 bg-opacity-70 ">
                <text> NOTE: </text>
                <text> I've been working on this from about last 10 days (and is the project I wasn't showing you) and tried to put in as many things i could think of, and make it functional. toh kripya, bezatti na kre😅. </text>
            </div>
            <FloatingEmojiWithHearts/>
        </div>
    )
}

export default Dashboard;