function generate(){
    let quotes = {
        "― Albert Einstein" : '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
        "-Carrie Bradshaw" : 
        '“Maybe some women are not meant to be tamed. Maybe they just need to run free until they find someone just a_s wild to run with them."',
        "― Mary Astell" : '“If all men are born free, how is it that all women are born slaves?”',
        " ―C.S. Lewis" : '“I was not born to be free---I was born to adore and obey.”',
        "-Thomas Fuller" : '“All things are difficult before they are easy.”',
        "-John Wooden" : '"Good things take time.”',
        "-John Maxwell" : '“Change is inevitable. Growth is optional.”',
        "-C.S Lewis" : '“There are far better things ahead than any we leave behind.”',
        "-Hermann Hesse" : '"Some of us think holding on makes us strong, but sometimes it is letting go.”',
        "-Ginni Rometty" : '“Growth and comfort do not coexist.”',
        "-William Arthur Ward" : '“The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.”',
        "-Roy T. Bennett" : '"You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone."',
        "-Arnold Bennett" : '“Any change, even a change for the better, is always accompanied by discomforts.”',
        "-Stephen Chbosky" : '"Things change. And friends leave. Life does not stop for anybody."',
        "-John F. Kennedy" : '“Change is the law of life. And those who look only to the past or present are certain to miss the future.”',
        "-Abraham Maslow" : ' “In any given moment we have two options: to step forward into growth or step back into safety.”',
        "-Nicholas Sparks" : '"I do not know that love changes. People change. Circumstances change."'
        
    }

    let authors = Object.keys(quotes);

    // console.log(authors);

    let author = authors[Math.floor(Math.random()*authors.length)];

    let quote = quotes[author];

    document.getElementById("author").innerHTML = author;

    document.getElementById("quote").innerHTML = quote;
    
    
}