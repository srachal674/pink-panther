/**
 * function playMeasures2and3 () {
 * 
 * // This is played 2 times and covers measueres 2 - 5 in the music.
 * 
 * // Play measure 2
 * 
 * music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
 * 
 * music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
 * 
 * music.play(music.tonePlayable(220, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
 * 
 * music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
 * 
 * // Measure 3
 * 
 * music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
 * 
 * music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
 * 
 * music.rest(music.beat(BeatFraction.Quarter))
 * 
 * music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
 * 
 * music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
 * 
 * music.rest(music.beat(BeatFraction.Eighth))
 * 
 * music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
 * 
 * }
 */
// This program should play the 2nd Trombone part for the Trombone duet for The Pink Panther by Henry Mancini. The flow is measures 1 - 21 repeat to measure 6 and play to measure 19 and go to the second endiing which is measure 21 and play to the end.
function playMeasures6to21 () {
    // This function plays measures 6-19 and the first ending. The first ending is measures 20 and 21.
    playMeasures6to19()
    // Measure 20
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.play(music.tonePlayable(220, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // Measure 21
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(music.beat(BeatFraction.Quarter))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
}
function playMeasures22to25 () {
    // This function plays the second ending to the end. Mesaures 22 - 25.
    // Measure 22
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Half))), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    // This is a D-flat
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Measure 23
    // This is a B-flat
    music.play(music.tonePlayable(233, calculateDottedDuration(music.beat(BeatFraction.Half))), music.PlaybackMode.UntilDone)
    // This is a B-flat
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Measure 24
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.play(music.tonePlayable(220, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // Measure 25
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Half)))
}
function playMeasures6to19 () {
    // This function plays measures 6 - 19 and will be used in other functions.
    // Measure 6
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.play(music.tonePlayable(220, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // Measure 7
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    // This is a D-flat
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Measure 8
    // This is a B-flat
    music.play(music.tonePlayable(233, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.play(music.tonePlayable(349, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // Measure 9
    // This is a B-flat
    music.play(music.tonePlayable(277, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(music.beat(BeatFraction.Quarter))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Measure 10
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.play(music.tonePlayable(220, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // Measure 11
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(music.beat(BeatFraction.Quarter))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Measure 12
    // This is a E-flat
    music.play(music.tonePlayable(311, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // This is a B-flat
    music.play(music.tonePlayable(233, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // Measure 13
    // This is a E-flat
    music.play(music.tonePlayable(311, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(music.beat(BeatFraction.Quarter))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Measure 14
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.play(music.tonePlayable(220, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // Measure 15
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(music.beat(BeatFraction.Quarter))
    // This is a D-flat
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Measure 16
    // This is a B-flat
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.play(music.tonePlayable(349, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    // Measure 17
    // This is B-flat
    music.play(music.tonePlayable(233, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Measure 18
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Quarter)))
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Double)))
    // Measure 19
    music.rest(music.beat(BeatFraction.Breve))
}
// Declare the variable at the global scope
// Define the function to calculate dotted duration
function calculateDottedDuration (originalDuration: number) {
    dottedDuration = originalDuration + originalDuration / 2
    return dottedDuration
}
let dottedDuration = 0
music.setTempo(40)
music.setVolume(228)
// this should play 1/8 low b natural 1/8 middle c 1/8 rest 1/8 middle c sharp barline
music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
music.rest(music.beat(BeatFraction.Eighth))
music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
// Play measures 2 and 3 twice
// playMeasures2and3()
// playMeasures2and3()
playMeasures6to21()
playMeasures6to19()
playMeasures22to25()
