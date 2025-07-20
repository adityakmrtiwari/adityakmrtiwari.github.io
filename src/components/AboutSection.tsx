import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

// Helper to calculate coding streak from submissionCalendar
function calculateStreak(submissionCalendar: Record<string, number>): number {
  if (!submissionCalendar) return 0;
  const days = Object.keys(submissionCalendar)
    .map((ts) => Math.floor(Number(ts) / 86400))
    .sort((a, b) => b - a);
  let streak = 0;
  let today = Math.floor(Date.now() / 1000 / 86400);
  for (let i = 0; i < days.length; i++) {
    if (days[i] === today) {
      streak++;
      today--;
    } else if (days[i] === today - 1) {
      streak++;
      today--;
    } else if (days[i] < today) {
      break;
    }
  }
  return streak;
}

const AboutSection: React.FC = () => {
  const [leetcodeStats, setLeetcodeStats] = useState<{
    totalSolved?: number | string;
    easySolved?: number | string;
    mediumSolved?: number | string;
    hardSolved?: number | string;
    ranking?: number | string;
    contestRating?: number | string;
    streak?: number | string;
  } | null>(null);
  const [codeforcesStats, setCodeforcesStats] = useState<{
    rating?: number;
    maxRating?: number;
    rank?: string;
    maxRank?: string;
  } | null>(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/userProfile/adityakmrtiwari")
      .then((res) => res.json())
      .then((data) => {
        const streak = calculateStreak(data.submissionCalendar);
        setLeetcodeStats({
          totalSolved: data.totalSolved ?? "-",
          easySolved: data.easySolved ?? "-",
          mediumSolved: data.mediumSolved ?? "-",
          hardSolved: data.hardSolved ?? "-",
          ranking: data.ranking ?? "-",
          contestRating: data.contestRating ?? "1609",
          streak: streak ?? "-"
        });
      })
      .catch(() => setLeetcodeStats(null));

    fetch("https://codeforces.com/api/user.info?handles=aaditya_")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK" && data.result && data.result.length > 0) {
          const user = data.result[0];
          setCodeforcesStats({
            rating: user.rating,
            maxRating: user.maxRating,
            rank: user.rank,
            maxRank: user.maxRank,
          });
        }
      })
      .catch(() => setCodeforcesStats(null));
  }, []);

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/adityakmrtiwari/",
      icon: "/icons/leetcode.png",
      stats: {
        problemsSolved: leetcodeStats?.totalSolved ?? "370",
        rating: leetcodeStats?.ranking ?? "1609",
      },
      description:
        "Active problem-solver with a strong focus on Data Structures & Algorithms. Consistently honing DSA skills and tackling a diverse range of algorithmic challenges.",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/adityakmrtiwar",
      icon: "/icons/codechef.png",
      stats: {
        problemsSolved: 100,
        rating: 1085,
        contestsParticipated: 15,
      },
      description:
        "Engaged in competitive programming, showcasing speed and efficient problem-solving. Dedicated to improving logical thinking and coding precision through contests.",
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/aaditya_",
      icon: "/icons/codeforces.png",
      stats: {
        problemsSolved: "-",
        rating: codeforcesStats?.rating ?? "-",
        maxRating: codeforcesStats?.maxRating ?? "-",
        rank: codeforcesStats?.rank ?? "-",
        maxRank: codeforcesStats?.maxRank ?? "-",
      },
      description:
        "Consistent participant in competitive programming rounds, demonstrating algorithmic proficiency and quick strategic thinking. Focused on performance optimization and complex problem tackling.",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/adityakmrtiwari",
      icon: "/icons/hackerrank.png",
      stats: {
        problemsSolved: 120,
        rating: "Gold Badge",
      },
      description:
        "Proficient in foundational programming concepts and practical problem-solving. Showcasing versatility across various domains and a solid grasp of core computer science principles.",
    },
    {
      name: "GeeksForGeeks",
      url: "https://auth.geeksforgeeks.org/user/adityakmrtiwari",
      icon: "/icons/geeksforgeeks.jpg",
      stats: {
        problemsSolved: 50,
      },
      description:
        "Dedicated to continuous learning and exploring a wide array of CS topics. Actively practicing interview-style coding challenges and enhancing conceptual understanding.",
    },
    {
      name: "Codolio",
      url: "https://codolio.com/profile/adityakmrtiwari",
      icon: "/icons/codolio.jpeg",
      stats: {
        problemsSolved: 458,
      },
      description:
        "Comprehensive overview of coding achievements and competitive programming performance. Highlighting a strong portfolio of solved problems and skill mastery.",
    },
  ];

  // Split coding profiles for grid layout
  const mainProfiles = codingProfiles.filter(
    (profile) => profile.name === "LeetCode" || profile.name === "Codeforces"
  );
  const otherProfiles = codingProfiles.filter(
    (profile) => profile.name !== "LeetCode" && profile.name !== "Codeforces"
  );

  return (
    <motion.section
      id="about"
      className="relative py-20 min-h-[80vh] flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_40%,_rgba(255,192,203,0.10)_0%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_40%,_rgba(30,30,30,0.95)_0%,_rgba(10,10,10,1)_100%)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* About Me Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 tracking-tight">
              About <span className="text-blue-500 dark:text-blue-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Get to know more about me, my background, and what I do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <motion.div
                className="aspect-square overflow-hidden rounded-2xl shadow-xl border-2 border-transparent transition-all duration-300 group-hover:border-white dark:group-hover:border-white/30"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98, borderColor: "white" }}
              >
                <img
                  src="/Aditya.png"
                  alt="Profile photo of Aditya Kumar Tiwari"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400">
                Who am I?
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Hello! I'm a passionate and detail-oriented Full Stack Developer dedicated to building intuitive and impactful digital experiences. Currently, I'm pursuing my B.Tech in Computer Science and Engineering at Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, graduating in May 2026.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I specialize in modern web development technologies including React.js, JavaScript, HTML, CSS, Node.js, and Express. With a solid foundation in Data Structures and Algorithms, I enjoy solving real-world problems by designing scalable, user-centric web applications.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                My interests extend to backend architecture, API development, and exploring how backend systems can scale efficiently and securely. Alongside my full-stack work, I’m also delving into Machine Learning - constantly experimenting with models and exploring its potential to power intelligent applications.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Whether it’s writing clean UI components, optimizing server-side logic, or learning the latest in AI and cloud tech, I’m always excited to collaborate, innovate, and grow through impactful projects and meaningful problem-solving.
              </p>

              <motion.a
                href="/Aditya_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-black/40 backdrop-blur-md border-2 border-transparent hover:border-white dark:hover:border-white/30 rounded-xl shadow-lg text-black dark:text-white font-semibold transition-all duration-300 focus:outline-none"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center">
            <div className="w-2/3 h-0.5 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400 opacity-0 rounded-full"></div>
          </div>

          {/* Coding Profiles Section */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-pink-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400">
              Coding Profiles
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
              Explore my progress and achievements on these platforms.
            </p>
          </div>
          {/* First row: LeetCode and Codeforces */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 justify-center">
            {mainProfiles.map((profile) => (
              <motion.li
                key={profile.name}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300 p-6"
              >
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 w-full"
                >
                  <img
                    src={profile.icon}
                    alt={`Logo of ${profile.name}`}
                    className="w-16 h-16 mb-3 rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-md object-cover bg-white"
                  />
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg mb-1">
                    {profile.name}
                  </span>
                  {profile.name === "LeetCode" && leetcodeStats ? (
                    <div className="w-full flex flex-col items-center mb-2">
                      <div className="w-full flex flex-col gap-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-2 shadow-sm">
                        <div className="flex justify-between w-full">
                          <span className="font-semibold">Total Solved:</span>
                          <span>{leetcodeStats.totalSolved}</span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="text-green-600 dark:text-green-400">Easy:</span>
                          <span>{leetcodeStats.easySolved}</span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="text-yellow-600 dark:text-yellow-400">Medium:</span>
                          <span>{leetcodeStats.mediumSolved}</span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="text-red-600 dark:text-red-400">Hard:</span>
                          <span>{leetcodeStats.hardSolved}</span>
                        </div>
                        <div className="flex justify-between w-full border-t border-gray-300 dark:border-gray-700 pt-1 mt-1">
                          <span className="font-semibold">Ranking:</span>
                          <span>{leetcodeStats.ranking}</span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="font-semibold">Contest Rating:</span>
                          <span>{leetcodeStats.contestRating}</span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="font-semibold">Coding Streak:</span>
                          <span>{leetcodeStats.streak} days</span>
                        </div>
                      </div>
                    </div>
                  ) : profile.name === "Codeforces" && codeforcesStats ? (
                    <div className="w-full flex flex-col items-center mb-2">
                      <div className="w-full flex flex-col gap-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-2 shadow-sm">
                        <div className="flex justify-between w-full">
                          <span className="font-semibold">Rating:</span>
                          <span>{codeforcesStats.rating}</span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="font-semibold">Max Rating:</span>
                          <span>{codeforcesStats.maxRating}</span>
                        </div>
                        <div className="flex justify-between w-full border-t border-gray-300 dark:border-gray-700 pt-1 mt-1">
                          <span className="font-semibold">Rank:</span>
                          <span className="capitalize">{codeforcesStats.rank}</span>
                        </div>
                        <div className="flex justify-between w-full">
                          <span className="font-semibold">Max Rank:</span>
                          <span className="capitalize">{codeforcesStats.maxRank}</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {/* Show description */}
                  <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    {profile.description}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
          {/* Second row: Other profiles */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 justify-center">
            {otherProfiles.map((profile) => (
              <motion.li
                key={profile.name}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-xl shadow-lg border-2 border-transparent hover:border-white dark:hover:border-white/30 transition-all duration-300 p-6"
              >
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 w-full"
                >
                  <img
                    src={profile.icon}
                    alt={`Logo of ${profile.name}`}
                    className="w-16 h-16 mb-3 rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-md object-cover bg-white"
                  />
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg mb-1">
                    {profile.name}
                  </span>
                  {profile.name === "CodeChef" ? (
                    <div className="w-full flex flex-col items-center mb-2">
                      <div className="w-full flex flex-col gap-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-2 shadow-sm">
                        {profile.stats.problemsSolved !== undefined && (
                          <div className="flex justify-between w-full">
                            <span className="font-semibold">Problems Solved:</span>
                            <span>{profile.stats.problemsSolved}</span>
                          </div>
                        )}
                        {profile.stats.rating !== undefined && (
                          <div className="flex justify-between w-full">
                            <span className="font-semibold">Rating:</span>
                            <span>{profile.stats.rating}</span>
                          </div>
                        )}
                        {profile.stats.contestsParticipated !== undefined && (
                          <div className="flex justify-between w-full">
                            <span className="font-semibold">Contests:</span>
                            <span>{profile.stats.contestsParticipated}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (profile.name === "GeeksForGeeks" || profile.name === "Codolio") && profile.stats.problemsSolved !== undefined ? (
                    <div className="w-full flex flex-col items-center mb-2">
                      <div className="w-full flex flex-col gap-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-2 shadow-sm">
                        <div className="flex justify-between w-full">
                          <span className="font-semibold">Problems Solved:</span>
                          <span>{profile.stats.problemsSolved}</span>
                        </div>
                      </div>
                    </div>
                  ) : profile.name === "HackerRank" && profile.stats.problemsSolved !== undefined ? (
                    <div className="w-full flex flex-col items-center mb-2">
                      <div className="w-full flex flex-col gap-1 text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-2 shadow-sm">
                        <div className="flex justify-between w-full">
                          <span className="font-semibold">Problems Solved:</span>
                          <span>{profile.stats.problemsSolved}</span>
                        </div>
                        {profile.stats.rating && (
                          <div className="flex justify-between w-full">
                            <span className="font-semibold">Badge:</span>
                            <span>{profile.stats.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : null}
                  <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    {profile.description}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
