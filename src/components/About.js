import image1 from "../assets/pexels-jakubzerdzicki-34518920.jpg";
import image2 from "../assets/pexels-raunaq-15862398.jpg";
import image3 from "../assets/pexels-sebastiaan9977-3379264.jpg";
import image4 from "../assets/research.png";
import image5 from "../assets/pexels-caffeine-20758872.jpg";
function About() {
    return (
        <div>
            <div className="flex cursor-pointer">
                <div>
                    <img
                        src={image1}
                        alt={image1}
                        className="w-[340px] my-20 h-[490px]  border-2 border-red-950 mx-[80px] rounded-3xl shadow-2xl shadow-orange-950"
                    />
                </div>
                <div>
                    <ul className="my-[130px] text-lg mx-[20px] max-[650px]:text-sm max-[650px]:-my-[0px]">
                        <li className="my-[50px] px-[100px] ">
                            <u className="text-2xl text-green-500">Stock Market & Economy</u>: Indian share markets hit
                            a near six-month low driven by rising oil prices from US-Iran geopolitical tensions.
                        </li>
                        <li className="my-[50px] px-[100px] max-[650px]:-my-[50px]">
                            <u className="text-2xl text-green-500">Geopolitical Conflict & Crude Oil</u>: Rising US-Iran
                            tensions have pushed Brent crude above $107 a barrel. As India imports roughly 85% of its
                            crude requirements, this surge expands the country's import bill and risks squeezing
                            corporate profit margins
                        </li>
                        <li className="my-[50px] px-[100px]">
                            <u className="text-2xl text-green-500">Currency & Bond Pressures</u>: Driven by the oil
                            spike, the Indian Rupee (INR) breached the 96 mark against the US Dollar, hitting historic
                            lows. Simultaneously, the 10-year government bond yield spiked to a two-year high of 7.18%.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex cursor-pointer ">
                <div>
                    <img
                        src={image2}
                        alt={image2}
                        className="w-[560px] my-20 h-[490px]  border-2 border-lime-950 mx-[80px] rounded-3xl shadow-2xl shadow-lime-950"
                    />
                </div>
                <ul className="my-[130px] text-lg mx-[20px] max-[650px]:text-sm max-[650px]:-my-[0px]">
                    <li className="my-[50px] px-[100px]">
                        <u className="text-2xl text-lime-600">Cricket Updates</u>: Former cricket stars are heavily
                        discussing Virat Kohli's recent phenomenal century against the West Indies.
                    </li>
                    <li className="my-[50px] px-[100px] max-[650px]:-my-[50px]">
                        <u className="text-2xl text-lime-600">First ODI Results (September 27)</u>: India registered a
                        comprehensive 8-wicket victory against the West Indies at Thiruvananthapuram. Chasing a
                        competitive target of 296, India comfortably crossed the line in 41.4 overs. Kuldeep Yadav was
                        named Player of the Match for his outstanding 4-wicket haul.
                    </li>
                    <li className="my-[50px] px-[100px]">
                        <u className="text-2xl text-lime-600">The Milestone</u>: Virat Kohli stole the show by smashing
                        an unbeaten 139 runs off just 88 balls (including 9 sixes). In doing so, he became only the
                        second batter in cricket history after Sachin Tendulkar to breach the historic 15,000-run
                        milestone in ODI cricket. Indian captain Shubman Gill also anchored the chase beautifully with a
                        sublime century (110 runs).
                    </li>
                </ul>
            </div>
            <div className="flex cursor-pointer">
                <div>
                    <img
                        src={image3}
                        alt={image3}
                        className="w-[460px] my-20 h-[490px]  border-2 border-lime-950 mx-[80px] rounded-3xl shadow-2xl shadow-lime-950"
                    />
                </div>
                <div>
                    <ul className="my-[130px] text-lg mx-[20px] max-[650px]:text-sm max-[650px]:-my-[0px]">
                        <li className="my-[50px] px-[100px]">
                            <u className="text-2xl text-fuchsia-600">Entertainment & Celebrity News</u>: Ranbir Kapoor
                            and Alia Bhatt's new multi-crore Mumbai residence and updates on upcoming releases like
                            Ramayana Part 1 are trending online.
                        </li>
                        <li className="my-[50px] px-[100px] max-[650px]:-my-[50px]">
                            <u className="text-2xl text-fuchsia-600">The Visuals</u>: Coinciding with Ranbir Kapoor's
                            birthday, the makers unveiled spectacular new character posters showcasing Ranbir Kapoor as
                            Lord Ram, Sai Pallavi as Sita, Ravie Dubey as Lakshman, and a grand look at Yash as King
                            Ravana.
                        </li>
                        <li className="my-[50px] px-[100px]">
                            <u className="text-2xl text-fuchsia-600">Release Date Shift</u>: The film has locked a
                            global international release for November 6, 2026. However, to avoid online backlash over a
                            delayed domestic rollout, reports indicate that the makers are planning to prepone the
                            Indian theatrical release to November 5, 2026, right in time for the Diwali weekend.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center gap-12 max-[650px]:block sm:block sm:ml-[90px] lg:block lg:ml-[50px] xl:flex ">
                <div className="bg-lime-300 rounded-xl max-[650px]:ml-[30px] max-[650px]:h-[620px] border-4  h-[490px] w-[650px]  border-gray-600 cursor-pointer max-[650px]:w-[500px] ">
                    <p className=" pt-[10px] pl-[10px] text-[60px] font-extrabold text-sky-950 italic">TOP TRENDING</p>
                    <div className="flex">
                        <div className="flex max-[650px]:-ml-[150px] max-[650px]:mt-[30px] -ml-[30px]">
                            <div>
                                <p className="pt-[7px] pl-[180px] text-[50px] text-teal-400 italic font-semibold">
                                    SEARCH
                                </p>
                            </div>
                            <div>
                                <p className="border-2 w-[220px] h-[50px] mt-[25px] rounded-[28px] border-purple-600 bg-slate-100">
                                    <img
                                        src={image4}
                                        alt={image4}
                                        className="w-[140px] ml-[130px] -mt-[60px] shadow-xl shadow-purple-800 rounded-[69px] hover:shadow-cyan-600 "
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-[80px] pl-[30px]">
                            <ol className="list-decimal list-inside max-[650px]:block flex flex-col flex-wrap h-40 marker:text-sky-500">
                                <li className="text-[20px] text-amber-950"> India Prime League</li>
                                <li className="text-[20px] text-amber-950"> T20 World Cup</li>
                                <li className="text-[20px] text-amber-950"> Bharatiya Janata Party</li>
                                <li className="text-[20px] text-amber-950"> Election Results 2026</li>
                                <li className="text-[20px] text-amber-950"> Olympics</li>
                                <li className="text-[20px] text-amber-950">Excessive Heat</li>
                                <li className="text-[20px] text-amber-950">Ratan Tata</li>
                                <li className="text-[20px] text-amber-950">Indian National Congress</li>
                                <li className="text-[20px] text-amber-950"> Pro Kabbadi League </li>
                                <li className="text-[20px] text-amber-950">Indian Super League</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="max-[650px]:mt-[140px] sm:mt-[140px] lg:mt-[140px] xl:mt-0  bg-teal-200 rounded-xl  max-[650px]:ml-[30px]  border-4  h-[490px] w-[650px]  border-gray-600 cursor-pointer max-[650px]:w-[500px] max-[650px]:h-[590.5px]">
                    <div className="flex">
                        <div>
                            <img src={image5} alt={image5} className="w-[271.5px] rounded-lg max-[650px]:h-[582.9px]" />
                        </div>
                        <div>
                            <p className="text-[40px] font-medium italic text-indigo-900">Top 10 Topics</p>
                            <ul className="list-disc pl-[30px] marker:text-orange-700">
                                <li className="mt-[10px] text-amber-950">Artificial Intelligence</li>
                                <li className="mt-[10px] text-amber-950"> Automation</li>
                                <li className="mt-[10px] text-amber-950">Environmental Sustainability</li>
                                <li className="mt-[10px] text-amber-950">Fintech & Digital Lending</li>
                                <li className="mt-[10px] text-amber-950">Geopolitics & Foreign Policy</li>
                                <li className="mt-[10px] text-amber-950">Workplace Well-being </li>
                                <li className="mt-[10px] text-amber-950">Gig Economy</li>
                                <li className="mt-[10px] text-amber-950">Skilling & Education</li>
                                <li className="mt-[10px] text-amber-950">Cricket & Sports Culture</li>
                                <li className="mt-[10px] text-amber-950">E-Mobility & EVs</li>
                                <li className="mt-[10px] text-amber-950">Digital Privacy & Deepfakes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="">Gold rate</p>
            </div>
        </div>
    );
}
export default About;
