import React from 'react';

let dictionary = [
    [ 'susie', 'zoos', 'sues', 'sauce', 'assess', 'sissy', 'sassy' ],
    [ 'suit', 'acid', 'seed', 'swat', 'sad' ],
    [ 'sun', 'assign', 'snowy' ],
    [ 'sumo', 'zoom', 'some', 'sam', 'sammy', 'awesome' ],
    [ 'sore', 'czar', 'sara', 'sierra', 'sorrow', 'sorry' ],
    [ 'soil', 'sell', 'slow', 'weasel' ],
    [ 'sewage', 'switch', 'swishy', 'sage' ],
    [ 'soak', 'sick', 'sack' ],
    [ 'sofa', 'save', 'savvy' ],
    [ 'soap', 'sob', 'sappy' ],
    [ 'saute', 'autos', 'suite', 'iotas', 'daisy', 'tease', 'dizzy' ],
    [ 'today','audio','toad','tidy','duet','date','audit','edit','tide','tattoo' ],
    [ 'ton', 'don', 'tune', 'dun', 'donna', 'tuna', 'duet', 'den' ],
    [ 'team', 'time', 'tame', 'tome', 'tomb', 'tom', 'tam', 'dome' ],
    [ 'dairy', 'diary', 'adore', 'door', 'dear', 'deer', 'draw', 'dry' ],
    [ 'delay','daily','yodel','ideal','duel','dual','deal','dale','tail','tall','tell' ],
    [ 'teach','taj','dish','touche','douche','diss','tech','haute','tissue' ],
    [ 'tack', 'tokay', 'tyke', 'teak', 'tiki', 'dog', 'take', 'thick' ],
    [ 'tofu','dive','duff','tiff','defy','deaf','dave','davie','dove','diva','tivo','deaf' ],
    [ 'tape','dab','tap','dip','utopia','adobe','dooby','tuba','deep' ],
    [ 'uneasy','noisy','noise','nose','nosey','nas','anus','noose' ],
    [ 'unite','nude','note','not','knot','sent','scent','need','kneed' ],
    [ 'none', 'anyone', 'inane', 'union', 'nanny', 'noun', 'onion' ],
    [ 'name', 'nomad', 'enemy', 'noma', 'enima', 'numb' ],
    [ 'unary', 'nair', 'noir', 'nori', 'honour', 'winery' ],
    [ 'nail', 'nile', 'neal', 'anole', 'noel', 'nil' ],
    [ 'niche', 'nation', 'notion', 'nacho', 'enjoy', 'nudgy' ],
    [ 'unyoke', 'enoki', 'nuke', 'onik', 'neck', 'knock', 'naggy' ],
    [ 'unify', 'navy', 'naïve', 'nova', 'knife', 'envy' ],
    [ 'nip','nap','nope','nape','knope','honeybee','nab','wannabe' ],
    [ 'mase','muse','miss','mice','mace','maze','amaze','mouse','amuse','messy' ],
    [ 'mute','mate','meat','meta','mate','moat','mat','meadow','mute' ],
    [ 'mane','main','many','meany','money','amino','many','menu','mean','mine','omen','moon' ],
    [ 'mom', 'mommy', 'mummy', 'mum', 'mime', 'myoma', 'memo' ],
    [ 'more', 'mare', 'omar', 'mayor', 'moray', 'amour', 'mair', 'emir' ],
    [ 'mile','miles','mule','mail','email','amole','meal','mole','maul' ],
    [ 'much','mage','magi','mage','match','mash','mushy' ],
    [ 'make','mike','moke','mocha','maggie','mick','mack','micky','mug','mock' ],
    [ 'mofo', 'muff', 'move', 'movie', 'mauve', 'mave' ],
    [ 'miopa', 'mob', 'mop', 'mopey', 'moppy', 'maybe', 'map', 'wimpy' ],
    [ 'arouse','arise','rise','rous','rose','rosie','euros','rice','erase','rosy' ],
    [ 'yard', 'rude', 'road', 'read', 'reed', 'ready' ],
    [ 'rain', 'urine', 'rainy', 'rune', 'ruin', 'runny' ],
    [ 'room','ream','rhyme','rim','REM','rimy','amir','ream','roam','rum','ram' ],
    [ 'error', 'roar', 'rear', 'rory', 'aurora', 'rare' ],
    [ 'rail', 'real', 'really', 'railway', 'rule', 'royal', 'ryan' ],
    [ 'roach', 'reach', 'rich', 'ration', 'rage' ],
    [ 'rag','rake','rocky','rake','rick','rook','ricky','reich','raku','rag' ],
    [ 'roof', 'arrive', 'rough', 'ruff', 'roof', 'rave' ],
    [ 'rope', 'wrap', 'ripe', 'rip', 'rib', 'rape', 'ruby', 'robes' ],
    [ 'loose','louse','louise','louis','lose','lazy','lousy','loss' ],
    [ 'lead', 'aloud', 'oiled', 'lady', 'loud', 'lude', 'elite' ],
    [ 'alien','alone','lion','line','luna','loan','leen','lean','lein' ],
    [ 'loom', 'lime', 'limo', 'lame', 'llama' ],
    [ 'lair', 'lure', 'leery', 'laura', 'lorry' ],
    [ 'lily', 'lull', 'loyal', 'lowly' ],
    [ 'luge', 'leech', 'latch', 'lush', 'louche' ],
    [ 'olive','leg','lick','lucky','luck','luke','leaky','leak','alike' ],
    [ 'leaf', 'lava', 'love', 'leafy', 'life', 'lifeway', 'laugh' ],
    [ 'lip', 'help', 'loop', 'lap', 'lab', 'lube', 'loopy' ],
    [ 'cheese','chase','choose','ouches','jizz','jazz','jazzy','jay-z' ],
    [ 'shit','shute','cheat','shady','sade','sheet','shout','shut','cheetah' ],
    [ 'chin','shin','jin','jane','jean','join','chine','china','shiny','shine' ],
    [ 'shame', 'chime', 'chum', 'jam', 'shim', 'sham', 'shamu' ],
    [ 'chaire', 'chore', 'share', 'shore', 'shire', 'sure', 'assure' ],
    [ 'chilli', 'chili', 'chill', 'jolly', 'chola', 'jules', 'julie' ],
    [ 'cha-cha', 'judge', 'jewish', 'shoji' ],
    [ 'chick', 'check', 'shaky', 'shake', 'choke' ],
    [ 'chef','achieve','chief','chive','jive','juvy','jeff','shove','shave' ],
    [ 'jeep', 'chop', 'cheap', 'chap', 'chip', 'chips', 'jap', 'gip' ],
    [ 'goose', 'kiss', 'cosy', 'case', 'chaos', 'quiz', 'quasi' ],
    [ 'quate', 'quit', 'kite', 'kid', 'kit', 'cat', 'kitty' ],
    [ 'akin', 'kane', 'koan', 'kine', 'keno', 'queen', 'ken', 'kenny' ],
    [ 'kim','cammy','cam','came','come','game','coma','comb' ],
    [ 'car', 'kory', 'corey', 'kari', 'kyrie', 'kora', 'carry' ],
    [ 'koala', 'quail', 'quill', 'kill', 'equal', 'cool' ],
    [ 'cage', 'coach', 'catchy', 'quash' ],
    [ 'cake', 'cook', 'quick', 'kayak', 'quicky', 'cookie' ],
    [ 'cave', 'give', 'goofy', 'goof', 'cove', 'quaff', 'queef', 'agave' ],
    [ 'quip', 'equip', 'cape', 'cab', 'cup', 'Kip', 'cobb', 'cob', 'coup' ],
    [ 'fizz', 'phase', 'fuss', 'wives', 'waves', 'vase' ],
    [ 'feet', 'feta', 'fiat', 'fate', 'fat', 'fade', 'fido' ],
    [ 'faun','fawn','fine','ovine','vieny','vein','veiny','vain','vine' ],
    [ 'fomo', 'foamy', 'foam', 'fame', 'fume' ],
    [ 'fore','fairy','waiver','waver','foray','fiery','fire','fury','voyeur','ovary','ivory' ],
    [ 'fool', 'foul', 'woeful', 'full', 'afoul', 'awful', 'fuel', 'feel' ],
    [ 'fiji', 'fish','veggie' ],
    [ 'fuck', 'fake', 'fique', 'fig', 'foggy' ],
    [ 'fifa', 'viva', 'fave', 'phife', 'fife' ],
    [ 'vibe', 'fob', 'fab', 'fap', 'vape', 'fib' ],
    [ 'boss','oppose','busy','bossy','base','abuse','pies','pays','bays','buys','bus' ],
    [ 'payout','pat','patty','bat','bad','opiet','patio','pouty','pout' ],
    [ 'pine','pain','pane','bone','puny','piney','pony','piano','peon' ],
    [ 'pam','puma','bum','bomb','bum','poem','beam','beamy','mabe','bam' ],
    [ 'pour','poor','buyer','boar','bore','boring','pear','pair','payer','burr' ],
    [ 'bool','pool','pail','pale','pal','bell','peel','blue','bail' ],
    [ 'pooch','bush','peachy','peach','paige','pouch','patch','bushy' ],
    [ 'epich','pick','pack','bike','poke','back','pecky','peck','puke' ],
    [ 'beef', 'pave', 'puffy', 'poofy', 'poof', 'buff', 'biff', 'buffy' ],
    [ 'poop','poopy','boop','pappa','papa','puppy','pipe','pop','baby' ]
   ]



class Dropdown extends React.Component{
    

    render(){

        const wordArray = dictionary[parseInt(this.props.month)];
        
                if (wordArray){
                    wordArray.forEach((e)=>{
                        let dropdownParent = document.getElementById("dropdown1");
                        let option = document.createElement("option");
                        option.textContent = e;
                        dropdownParent.appendChild(option);
                    })
                }

        return (
            <div>
                <form onSubmit={this.props.handleConfirmDropdownWords}>
                    <select id="dropdown1" onChange={this.props.handleWordSelect} value={this.props.monthWord}>

                    </select>

                    <input id="submit" type="submit" value="Generate GIFs" />
                </form>
            </div>
        )
    }
}

//refactor so that this submit button is separate
//and so that four dropdowns can be generated

export default Dropdown;