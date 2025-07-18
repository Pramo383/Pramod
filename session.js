//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUowcEtaRXNIczRWa1ZYaTVoeDdTc3ZjNENsQjRGbkVZaTF1REcvUHVsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEJFUVJhRjJXdjR3dXZiQUVYblN6aUN2NjBjWFR3VXJhRjNLWVFlNG14OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSnFnamNpc0kwNi90V0N1aVcvY3NsS2Q0ZFFYVmdZLzduaVU3VjlOYW5ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSSXgvUVBuTG1pNW1SZ20yem5WZmt0WW5keEpESkcvY2ZnaktZT3Avb3kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIdFBNaHlOR3Z1V2hhZHNjMDRBeFl6aXVnalNOOWJOWkJMNUJ3R2lLa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRjZ3Z2djZXYWYxc0txK1VudXZTL0NiRUtsMWx4T204bVNZdCs0TEZZUjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9ZUmxRWHh5b2JMTHlIaDhXWkxJRXorUzFTcEFORGVWNkZheFhZWmQwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWRzODU2SzVySGIydHJ5cGJQbDVlc29ibXcvTGZZRE1FY1Rua01YaVNuST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY1b283VWJrSjJuejJZeGpQem96ZEZWQWljVnVPUUdTL0h1YitGZkROTngyemNSNG9aeFRnUG8xTlA3U1pBS3lIMjNWWXN3UDdQRmh4WFpWdlZwemdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6IkQrVDdYaUtDVkRKNm1LdDI1djc1eDljYmRFMDJWN3lVa2ZwamltTVhmQjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVoYUpPamdwUU1TemhpR2gxc0dKclEiLCJwaG9uZUlkIjoiNjg4ZjUxNDktZGRiNy00Njc2LTllOTktMjI5NzQ3MjNlZDAwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllyZWh1T0FHYVVmdHlmUE9yeEJDdTVrbWgxMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuaGU3NS9jdlkxalA4QU8vekJYVUwzdzVHbzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVBXUzk4UzUiLCJtZSI6eyJpZCI6Ijk0NzQxMzEzOTg4OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhhbnNhbmEiLCJsaWQiOiIxNDQ5ODE1NTM2MzU0NjE6MTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLS0F3T3dGRVBhbzZjTUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKVFZqWUZ1QzJQeERVQ2FRSWxYN0FIQnk3eG1YSlAxVDNNSlJRKzhVaHg4PSIsImFjY291bnRTaWduYXR1cmUiOiJVYUFZdVhnbE43RWdZSWt3NEdxYVljeC9nSU5RK3RxRU42dGVJZzJDTE5peXJhNkJDaEx2WURkTGFkcm1oK04xZUQ5WU1TK3VET1ROckR0czFqZVZCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieERLd2YwUGEyMndPWElUQUROb2JaekVjclkycDNVOXhIM3hsWlIrQU9XaG5pUGFuS0hKN21rZktmVUlEZmhaNm1OcG5xUTdUOWFXMTNmVHdsVUlEaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTMxMzk4ODoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTVTFZMkJiZ3RqOFExQW1rQ0pWK3dCd2N1OFpseVQ5VTl6Q1VVUHZGSWNmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI4NDc0OTIsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHBTIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94741313988",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "mongodb+srv://javolef128:kdHmlVfHglwEoExh@pramodb.nefxrcd.mongodb.net/",
};
