


//  Two Sum

// Subdomain Visit Count

var subdomainVisits = function (cpdomains) {

    let final = {};

    cpdomains.forEach(domain => {
        let split = domain.split(" ");
        let num = parseInt(split[0]);
        let word = split[1];
        let parts = split[1].split(".");

        while (parts.length) {

            if (final[word]) {
                final[word] += num;
            } else {
                final[word] = num;
            }

            let length = parts.shift().length;
            word = word.slice(length + 1);
        }

    })


    let result = Object.keys(final).map((part) => {
        let together = final[part] + " " + part;
        return together;
    })

    return result;

};