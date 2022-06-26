/*var gs = require('github-scraper');
var url = '/0xWerz' // a random username
gs(url, function(err, data) {
  console.log(data); // or what ever you want to do with the data
})
*/



export const projects = [
  {
    title: 'Instagram auto Account Creation',
    description: "Instagram auto Account Creation /w selenium ",
      image: 'https://opengraph.githubassets.com/f31f072889efb2d8f2133803e8894c06131d432429e56d0a602a703f4a377de3/0xWerz/Instagram-accounts-creator',
      tags: ['python', 'bot', 'instagram', 'automation'],
    source: 'https://github.com/0xwerz/egybest-scraper',
    visit: '',
    id: 0,
  },
  /*{
    title: 'Egybest Scraper ',
    description:"A egybest movies only scraper (still under development) im too lazy <:",
    image: 'https://opengraph.githubassets.com/f31f072889efb2d8f2133803e8894c06131d432429e56d0a602a703f4a377de3/0xWerz/Instagram-accounts-creator',
    tags: ['flask', 'scraper', 'movies', 'egybest'],
    source: 'https://github.com/0xWerz/Instagram-accounts-creator/',
    visit: '',
    id: 1,
  },*/
  {
    title: 'A fast and simple Go tcp ports scan',
    description: "Disocrd bot for scraping proxies ",
      image: 'https://opengraph.githubassets.com/f31f072889efb2d8f2133803e8894c06131d432429e56d0a602a703f4a377de3/0xWerz/pgo',
      tags: ['python', 'proxy', 'discord', 'proxies'],
    source: 'https://github.com/0xWerz/pgo',
    visit: '',
    id: 1,
  },
  {
    title: 'ctf-writeups',
    description: "bash scripts for helping that used alot by ctf players.",
    image: 'https://opengraph.githubassets.com/f31f072889efb2d8f2133803e8894c06131d432429e56d0a602a703f4a377de3/0xWerz/ctf-writeups',
    tags: ['shell', 'bash', 'ctf', 'htb'],
    source: 'https://github.com/0xWerz/ctf-writeups',
    visit: '',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2005, text: 'spawned ', },
  { year: 2020, text: ':)', },
  { year: 2021, text: ':p', },
  { year: 2022, text: ':o', },
  { year: 2023, text: ':x', },
];

export const personalInfo = {
  "Personal_Info":{
      "Name": "rabii",
      "Alias": "Werz",
      "Age": 16,
      "Education": "Red teaming",
      "Position": "Earth",
      "Email": "d2VyejRidXNpbmVzc0B0dXRhLmlv",
      "Interests":[
          "Hardware hacking, Web development, Software Engineering, Visual editing"
      ]
  }
}

export const Achievements = [
    { number: "#100", text: 'Top 100 on hack the box'},
    { number: 7, text: 'Open Source Projects'},
    { number: 22, text: 'Github Followers', },
    { number: 11, text: 'Github Stars', }
]

export const CtfMarkdown = [
  {
    box: 'backdoor',
    provider: "Hack the box ",
      image: 'https://github.com/0xWerz/ctf-writeups/raw/main/HTB/Machines/backdoor/img/Backdoor.png',
    source: '/ctf/htb/backdoor',
    tags: ['Easy', 'Linux', 'Wordpress', 'CMS Exploit','RCE'],
    visit: '',
    id: 0,
  },
  {
    box: 'pandora',
    provider: "Hack the box",
      image: 'https://github.com/0xWerz/ctf-writeups/raw/main/HTB/Machines/pandora/img/Pandora.png',
      tags: ['Easy', 'Linux', 'PHP', 'CMS Exploit','SUID'],

    source: '/ctf/htb/pandora',
    visit: '',
    id: 1,
  },
  {
    title: 'secret',
    provider: "Hack the box",
    image: 'https://github.com/0xWerz/ctf-writeups/raw/main/HTB/Machines/secret/img/Secret.png',
    tags: ['Easy', 'Linux', 'Javascript', 'CMS Exploit','API'],

    source: '/ctf/htb/secret',
    visit: '',
    id: 2,
  },
];