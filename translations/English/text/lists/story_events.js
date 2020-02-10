const texts = {
  'index': {
    "label": "Intro",
    'table': 1,
    'type': 'index',
    'ltop': '50%',
    'lleft': '50%',
  },
  'hunt': {
    "label": "The Hunt",
    'table': 1,
    'type': 'hunt',
    'ltop': '70%',
    'lleft': '50%',
    'music': 'music/white secret.mp3',
    'speech': 'speech/hunt.mp3',
  },
  'settlement': {
    "label": "Settlement",
    'table': 1,
    'type': 'settlement',
    'music': 'music/settlement.mp3',
    'music_delay': '2000',
    'speech': 'speech/settlement.mp3',
  },
  'age': {
    "label": "Age",
    'ltop': '27%',
    'lleft': '49%',
  },
  'armored strangers': {
    "label": "Armored Strangers",
    'music': 'music/armored strangers.mp3',
    'music_delay': '4000',
    'campaign': ['Lantern'],
  },
  'birth of a savior': {
    "label": "Birth of a Savior",
    'music': 'music/birth of a savior.mp3',
    'music_delay': 'speech-1000',
    'ltop': '15%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'blackout': {
    "label": "Blackout",
    'music': 'music/overwhelming darkness.mp3',
    'music_delay': '3000',
    'ltop': '37%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'bold': {
    "label": "Bold",
    'ltop': '50%',
    'lleft': '75%',
    'campaign': ['Lantern', 'Sun'],
  },
  'bone witch': {
    "label": "Bone Witch",
    'music': 'music/see the truth.mp3',
    'ltop': '50%',
    'lleft': '65%',
  },
  'cooking': {
    "label": "Cooking",
    'music': 'music/cooking.mp3',
    'music_delay': '500',
    'ltop': '73%',
    'lleft': '50%',
  },
  'crush and devour': {
    "label": "Crush and Devour",
    'music': 'music/crush and devour.mp3',
  },
  'endless screams': {
    "label": "Endless Screams",
    'music': 'music/crush and devour.mp3',
    'ltop': '19%',
    'lleft': '48%',
  },
  'game over': {
    "label": "Game Over",
    'music': 'music/game over.mp3',
    'ltop': '32%',
    'lleft': '47%',
  },
  'hammer and nail': {
    "label": "Hammer and Nail",
    'music': 'music/hammer and nail.mp3',
    'campaign': ['Lantern'],
  },
  'hands of heat': {
    "label": "Hands of Heat",
    'music': 'music/hands of heat.mp3',
    'ltop': '75%',
    'lleft': '37%',

  },
  'herb gathering': {
    "label": "Herb Gathering",
    'music': 'music/herb gathering.mp3',
    'hide_label': true,
  },
  'hooded knight': {
    "label": "Hooded Knight",
    'music': 'music/hooded knight.mp3',
    'music_delay': 'speech-1000',
    'campaign': ['Lantern'],
  },
  'insight': {
    "label": "Insight",
    'campaign': ['Lantern', 'Sun'],
  },
  'intimacy': {
    "label": "Intimacy",
    'music': 'music/intimacy.mp3',
    'music_delay': 'speech-1000',
    'ltop': '22%',
    'lleft': '75%',

  },
  'kings curse': {
    "label": "King's Curse",
    'music': 'music/kings curse.mp3',
    'ltop': '88%',
    'lleft': '50%',
  },
  'kings step': {
    "label": "King's Step",
    'music': 'music/kings step.mp3',
    'music_delay': 'speech+500',
    'ltop': '67%',
    'lleft': '53%',
  },
  'lantern research': {
    "label": "Lantern Research",
    'campaign': ['Lantern'],
  },
  'legendary lungs': {
    "label": "Legendary Lungs",
    'music': 'music/legendary lungs.mp3',
    'music_delay': '500',
  },
  'legendary monsters': {
    "label": "Legendary Monsters",
    'music': 'music/legendary monsters.mp3',
    'hide_label': true,
  },
  'mineral gathering': {
    "label": "Mineral Gathering",
    'music': 'music/mineral gathering.mp3',
    'hide_label': true,
  },
  'overwhelming darkness': {
    "label": "Overwhelming Darkness",
    'music': 'music/overwhelming darkness.mp3',
    'music_delay': '3000',
  },
  'oxidation': {
    "label": "Oxidation",
    'ltop': '75%',
    'lleft': '35%',
    'campaign': ['Lantern'],
  },
  'phoenix feather': {
    "label": "Phoenix Feather",
    'music': 'music/legendary monsters.mp3',
    'ltop': '85%',
    'lleft': '75%',
  },
  'principle conviction': {
    "label": "Principle: Conviction",
    'music': 'music/principle.mp3',
    'music_delay': 'speech-1000',
  },
  'principle death': {
    "label": "Principle: Death",
    'music': 'music/principle.mp3',
    'music_delay': 'speech-1000',
  },
  'principle new life': {
    "label": "Principle: New Life",
    'music': 'music/principle.mp3',
    'music_delay': 'speech-1000',
    'ltop': '85%',
    'lleft': '50%',
  },
  'principle society': {
    "label": "Principle: Society",
    'music': 'music/principle.mp3',
    'music_delay': 'speech-1000',
    'ltop': '20%',
    'lleft': '65%',
  },
  'first story': {
    "label": "First Story",

    'music': 'music/first story.mp3',
    'music_delay': 'speech+1000',
  },
  'regal visit': {
    "label": "Regal Visit",
    'music': 'music/regal visit.mp3',
    'music_delay': 'speech-1000',
    'ltop': '65%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'returning survivors': {
    "label": "Returning Survivors",
    'campaign': ['Lantern'],
  },
  'run away': {
    "label": "Run Away",
    'music': 'music/run away.mp3',

  },
  'see the truth': {
    "label": "See the Truth",
    'music': 'music/see the truth.mp3',
  },
  'showdown butcher': {
    "label": "Showdown: Butcher",
    'music': 'music/showdown butcher.mp3',
  },
  'showdown gold smoke knight': {
    "label": "Showdown: Gold Smoke Knight",
    'music': 'music/showdown gold smoke knight.mp3',
    'ltop': '87%',
    'lleft': '80%',
    'campaign': ['Lantern'],
  },
  'showdown kings man': {
    "label": "Showdown: King's Man",
    'music': 'music/showdown kings man.mp3',
    'ltop': '68%',
    'lleft': '63%',
  },
  'showdown phoenix': {
    "label": "Showdown: Phoenix",
    'music': 'music/showdown phoenix.mp3',
  },
  'showdown screaming antelope': {
    "label": "Showdown: Screaming Antelope",
    'music': 'music/showdown query.mp3',
    'ltop': '15%',
    'lleft': '57%',
  },
  'showdown the hand': {
    "label": "Showdown: The Hand",
    'music': 'music/showdown the hand.mp3',
  },
  'showdown watcher': {
    "label": "Showdown: Watcher",
    'music': 'music/showdown watcher.mp3',
    'ltop': '15%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'showdown white lion': {
    "label": "Showdown: White Lion",
    'music': 'music/showdown query.mp3',
    'ltop': '63%',
    'lleft': '68%',
  },
  'watched': {
    "label": "Watched",
    'music': 'music/watched.mp3',
    'ltop': '15%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'white secret': {
    "label": "White Secret",
    'music': 'music/white secret.mp3',
  },
  'white speaker': {
    "label": "White Speaker",
    'music': 'music/white speaker.mp3',
    'music_delay': 'speech-1000',
    'ltop': '8%',
    'lleft': '66%',
  },
  'zero presence': {
    "label": "Zero Presence",
    'music': 'music/overwhelming darkness.mp3',
  },
  'fetid grotto': {
    "label": "Fetid Grotto",
    'expansion': 'gorm',
    'music': 'music/overwhelming darkness.mp3',
    'ltop': '20%',
    'lleft': '30%',
  },
  'final march': {
    "label": "Final March",
    'expansion': 'gorm',
    'music': 'music/final march.mp3',
    'music_delay': '500',
    'ltop': '20%',
    'lleft': '50%',
  },
  'the approaching storm': {
    "label": "The Approaching Storm",
    'expansion': 'gorm',
    'music': 'music/the approaching storm.mp3',
    'music_delay': '500',
    'ltop': '20%',
    'lleft': '70%',
  },
  'melting horror': {
    "label": "Melting Horror",
    'expansion': 'gorm',
    'music': 'music/crush and devour.mp3',
  },
  'showdown gorm': {
    "label": "Showdown: Gorm",
    'expansion': 'gorm',
    'music': 'music/showdown gorm.mp3',
  },
  'black harvest': {
    "label": "Black Harvest",
    'expansion': 'dung beetle knight',
    'music': 'music/rumbling in the dark.mp3',
  },
  'rumbling in the dark': {
    "label": "Tumbling in the Dark",
    'expansion': 'dung beetle knight',
    'type': 'video',
    'music': 'music/rumbling in the dark.mp3',
  },
  'secret meeting': {
    "label": "Secret Meeting",
    'expansion': 'dung beetle knight',
    'music': 'music/secret meeting.mp3',
    'music_delay': '500',
    'ltop': '35%',
    'lleft': '40%',
  },
  'spelunking of death': {
    "label": "Spelunking of Death",
    'expansion': 'dung beetle knight',
    'music': 'music/spelunking of death.mp3',
    'ltop': '18%',
    'lleft': '63%',
  },
  'underground sow': {
    "label": "Underground Sow",
    'expansion': 'dung beetle knight',
    'music': 'music/rumbling in the dark.mp3',
    'ltop': '20%',
    'lleft': '40%',
  },
  'showdown dung beetle knight': {
    "label": "Showdown: Dung Beetle Knight",
    'expansion': 'dung beetle knight',
    'music': 'music/showdown butcher.mp3',
    'ltop': '5%',
    'lleft': '55%',
  },
  'an uninvited guest': {
    "label": "An Uninvited Guest",
    'expansion': 'lion knight',
    'music': 'music/lion knight enter.mp3',
    'music_delay': 'speech-2000',
    'ltop': '10%',
    'lleft': '66%',
  },
  'finale': {
    "label": "Finale",
    'expansion': 'lion knight',
    'type': 'video',
    'music': 'music/finale.mp3',
  },
  'intermission': {
    "label": "Intermission",
    'expansion': 'lion knight',
    'music': 'music/lion knight main.mp3',
    'ltop': '88%',
  },
  'places, everyone!': {
    "label": "Places, Everyone!",
    'expansion': 'lion knight',
    'music': 'music/lion knight main.mp3',
    'ltop': '33%',
    'lleft': '37%',
  },
  'showdown lion knight': {
    "label": "Showdown: Lion Knight",
    'expansion': 'lion knight',
    'music': 'music/lion knight showdown.mp3',
    'ltop': '10%',
    'lleft': '66%',
  },
  'strange caravan': {
    "label": "Strange Caravan",
    'expansion': 'lion knight',
    'music': 'music/lion knight main.mp3',
    'music_delay': 'speech-1000',
    'ltop': '15%',
    'lleft': '40%',
  },
  'awake': {
    "label": "Awake",
    'expansion': 'dragon king',
    'ltop': '50%',
    'lleft': '75%',
    'campaign': ['Stars'],
  },
  'death of the dragon king': {
    "label": "Death of the Dragon King",
    'expansion': 'dragon king',
    'music': 'music/death of the dragon king.mp3',
    'ltop': '80%',
    'lleft': '75%',
    'campaign': ['Stars'],
  },
  'faces in the sky': {
    "label": "Faces in the Sky",
    'expansion': 'dragon king',
    'music': 'music/faces in the sky.mp3',
    'ltop': '15%',
    'lleft': '25%',
    'campaign': ['Stars'],
  },
  'foundlings': {
    "label": "Foundlings",
    'expansion': 'dragon king',
    'music': 'music/foundlings.mp3',
    'ltop': '10%',
    'lleft': '75%',
    'campaign': ['Stars'],
  },
  'glowing crater': {
    "label": "Glowing Crater",
    'expansion': 'dragon king',
    'music': 'music/glowing crater.mp3',
    'ltop': '50%',
    'lleft': '25%',
  },

  'meltdown': {
    "label": "Meltdown",
    'expansion': 'dragon king',
    'music': 'music/crush and devour.mp3',
    'lleft': '30%',
  },
  "midnight's children": {
    "label": "Midnight's Children",
    'expansion': 'dragon king',
    'music': 'music/glowing crater.mp3',
    'ltop': '5%',
    'campaign': ['Stars'],
  },
  'showdown dragon king': {
    "label": "Showdown: Dragon King",
    'expansion': 'dragon king',
    'music': 'music/showdown dragon king.mp3',
    'music_delay': 'speech+500',
    'ltop': '80%',
    'lleft': '35%',
  },
  'showdown the tyrant': {
    "label": "Showdown: The Tyrant",
    'expansion': 'dragon king',
    'music': 'music/glowing crater.mp3',
    'campaign': ['Stars'],
  },
  'the tomb': {
    "label": "The Tomb",
    'expansion': 'dragon king',
    'music': 'music/the tomb.mp3',
    'ltop': '85%',
    'campaign': ['Stars'],
  },
  'unveil the sky': {
    "label": "Unveil the Sky",
    'expansion': 'dragon king',
    'music': 'music/unveil the sky.mp3',
    'ltop': '55%',
    'lleft': '65%',
    'campaign': ['Stars'],
  },
  'bleeding heart': {
    "label": "Bleeding Heart",
    'expansion': 'manhunter',
    'music': 'music/the hanged man.mp3',
    'music_delay': 'speech+1000',
    'ltop': '80%',
  },
  'death pit': {
    "label": "Death Pit",
    'expansion': 'manhunter',
    'music': 'music/crush and devour.mp3',
    'ltop': '25%',
    'lleft': '25%',
  },
  'lottery': {
    "label": "Lottery",
    'expansion': 'manhunter',
    'music': 'music/lottery.mp3',
    'ltop': '80%',
    'lleft': '40%',
  },
  'showdown manhunter': {
    "label": "Showdown: Manhunter",
    'expansion': 'manhunter',
    'music': 'music/showdown manhunter.mp3',
    'music_delay': 'speech+1000',
    'ltop': '15%',
    'lleft': '70%',
  },
  'sonorous rest': {
    "label": "Sonorous Rest",
    'expansion': 'manhunter',
    'music': 'music/sonorous rest.mp3',
    'ltop': '15%',
    'lleft': '30%',
  },
  'the hanged man': {
    "label": "The Hanged Man",
    'expansion': 'manhunter',
    'type': 'video',
    'music': 'music/the hanged man.mp3',
  },
  'tools of war': {
    "label": "Tools of War",
    'expansion': 'manhunter',
    'music': 'music/lottery.mp3',
    'ltop': '7%',
    'lleft': '55%',
  },
  'dark place': {
    "label": "Dark Place",
    'expansion': 'slenderman',
    'music': 'music/dark place.mp3',
    'music_delay': 'speech+500',
    'ltop': '85%',
  },
  'forgotten fear': {
    "label": "Forgotten Fear",
    'expansion': 'slenderman',
    'music': 'music/forgotten fear.mp3',
    'music_delay': '500',
    'ltop': '7%',
  },
  'light-forging': {
    "label": "Light-Forging",
    'expansion': 'slenderman',
    'music': 'music/light-forging.mp3',
    'music_delay': '500',
    'ltop': '25%',
    'lleft': '75%',
  },
  'showdown slenderman': {
    "label": "Showdown: Slenderman",
    'expansion': 'slenderman',
    'music': 'music/showdown slenderman.mp3',
    'music_delay': 'speech+500',
  },
  'it\'s already here': {
    "label": "It's Already Here",
    'expansion': 'slenderman',
    'music': 'music/it\'s already here.mp3',
    'type': 'video',
  },
  'a gracious host': {
    "label": "A Gracious Host",
    'expansion': 'lion god',
    'music': 'music/a gracious host.mp3',
    'music_delay': '500',
    'ltop': '10%',
    'lleft': '75%',
  },
  'death reading': {
    "label": "Death Reading",
    'expansion': 'lion god',
    'music': 'music/death reading.mp3',
    'music_delay': '500',
  },
  'necropolis': {
    "label": "Necropolis",
    'expansion': 'lion god',
    'music': 'music/the knowledge worm.mp3',
    'music_delay': 'speech-1000',
    'ltop': '15%',
    'lleft': '85%',
  },
  'showdown lion god': {
    "label": "Showdown: Lion God",
    'expansion': 'lion god',
    'music': 'music/showdown lion god.mp3',
    'music_delay': 'speech + 1000',
    'ltop': '18%',
    'lleft': '28%',
  },
  'the knowledge worm': {
    "label": "The Knowledge Worm",
    'expansion': 'lion god',
    'music': 'music/necropolis.mp3',
    'music_delay': '300',
    'ltop': '15%',
  },
  'the silver city': {
    "label": "The Silver City",
    'expansion': 'lion god',
    'music': 'music/necropolis.mp3',
    'type': 'video',
  },
  'birth of color': {
    "label": "Birth of Color",
    'expansion': 'sunstalker',
    'music': 'music/birth of color.mp3',
    'music_delay': 'speech-2000',
    'campaign': ['Sun'],
  },
  'conquer your shadow': {
    "label": "Conquer Your Shadow",
    'expansion': 'sunstalker',
    'music': 'music/conquer your shadow.mp3',
  },
  'edged tonometry': {
    "label": "Edged Tonometry",
    'expansion': 'sunstalker',
    'music': 'music/edged tonometry.mp3',
    'ltop': '12%',
    'lleft': '35%',
    'campaign': ['Sun'],
  },
  'final gift': {
    "label": "Final Gift",
    'expansion': 'sunstalker',
    'music': 'music/final gift.mp3',
    'music_delay': 'speech - 5000',
    'campaign': ['Sun'],
  },
  'showdown sunstalker': {
    "label": "Showdown Sunstalker",
    'expansion': 'sunstalker',
    'music': 'music/showdown sunstalker.mp3',
    'music_delay': 'speech + 500',
  },
  'sky fishing': {
    "label": "Sky Fishing",
    'expansion': 'sunstalker',
    'music': 'music/sky fishing.mp3',
    'ltop': '15%',
    'lleft': '38%',
  },
  'sun dipping': {
    "label": "Sun Dipping",
    'expansion': 'sunstalker',
    'music': 'music/sun dipping.mp3',
    'ltop': '12%',
    'lleft': '40%',
    'campaign': ['Sun'],
  },
  'the great devourer': {
    "label": "The Great Devourer",
    'expansion': 'sunstalker',
    'music': 'music/promise under the sun.mp3',
    'music_delay': 'speech + 1000',
    'campaign': ['Sun'],
  },
  'the great sky gift': {
    "label": "The Great Sky Gift",
    'expansion': 'sunstalker',
    'music': 'music/the great sky gift.mp3',
    'music_delay': '1000',
    'ltop': '18%',
    'lleft': '25%',
    'campaign': ['Sun'],
  },
  'the pool and the sun': {
    "label": "The Pool and the Sun",
    'expansion': 'sunstalker',
    'music': 'music/the pool and the sun.mp3',
    'campaign': ['Sun'],
  },
  'umbilical symbiosis': {
    "label": "Umbilical Symbiosis",
    'expansion': 'sunstalker',
    'music': 'music/umbilical symbiosis.mp3',
    'campaign': ['Sun'],
  },
  'warriors of the sun': {
    "label": "Warriors of the Sun",
    'expansion': 'sunstalker',
    'music': 'music/warriors of the sun.mp3',
    'campaign': ['Sun'],
  },
  'promise under the sun': {
    "label": "Promise Under the Sun",
    'expansion': 'sunstalker',
    'music': 'music/promise under the sun.mp3',
    'type': 'video',
  },

}

module.exports = {
 texts,
}