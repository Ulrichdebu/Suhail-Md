const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_06_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1FU2xsczM3ZkNpTmtuYk1ZSWowSm5GNXFZT3RqQVNEc0ZLb0tyRXBSRHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpJZ3RZOWt0Uk5tdXpPdVJ2MXBfNlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzE5ZTk3YmMtMDRkMy00ZWE1LTliMmEtZWRkMTg1YWM5N2EzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDE0MCxcbiAgICAgIDE5MSxcbiAgICAgIDI1MSxcbiAgICAgIDQxLFxuICAgICAgNzUsXG4gICAgICAxODgsXG4gICAgICAxMzQsXG4gICAgICAxNzAsXG4gICAgICAxMDIsXG4gICAgICA1NSxcbiAgICAgIDE5LFxuICAgICAgMjUyLFxuICAgICAgMjM0LFxuICAgICAgMjMsXG4gICAgICAyNDQsXG4gICAgICAxMzgsXG4gICAgICAxNjAsXG4gICAgICA2LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDc5LFxuICAgICAgMTYxLFxuICAgICAgODcsXG4gICAgICA5OSxcbiAgICAgIDI0MCxcbiAgICAgIDgxLFxuICAgICAgMTQ1LFxuICAgICAgMTc4LFxuICAgICAgMTcyLFxuICAgICAgMjMxLFxuICAgICAgMjgsXG4gICAgICAxNzIsXG4gICAgICAyMTEsXG4gICAgICAxLFxuICAgICAgMjQ3LFxuICAgICAgNzgsXG4gICAgICA4MyxcbiAgICAgIDExMyxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3am5ZZ0VFS3lJb2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFdLbUo1aGlPT0RTL0g0ZWNZVGhLaWJqV0dQUTJZZ3pMSlptN3lUVkhEbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3dk1YWllZQ0Q2UU9EcFIxbld0Ryt4S2NYUk94cGtiakJjTENoTE5pblRvZGZaNkJ5cmVJZlNTSWpLNlhybCsxZXlldlZrN0Jka0E5N3B3MFFiMmlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWK1NUR3IyYThZa3UxeEFJdnhvdlFTYVVSaW9VMnNsV2VydUIwMjBnWjZscjA2djlOdTd4RzdWMDJuemE5MzdmOGdUUXJrV2gzY3pmSExQTjYwM2VCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5NTgwOTExMTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDk2NTkzNzM0NDUyMDE6NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5NTgwOTExMTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjA2MzgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREU3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFERTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpL2VheStHMjQzMWtORi9sVGJoUTJDMnNZRERBSWpVR1NrREVwNWo3Q29RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTEwMDY5MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDIwNjM4NjQ5N1wifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
