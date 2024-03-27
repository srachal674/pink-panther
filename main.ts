function playMeasures2and3 () {
    // Play measure 2
    music.play(music.tonePlayable(294, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Eighth)))
    music.play(music.tonePlayable(220, calculateDottedDuration(music.beat(BeatFraction.Quarter))), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Eighth)))
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(calculateDottedDuration(music.beat(BeatFraction.Eighth)))
    music.rest(music.beat(BeatFraction.Quarter))
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    // Play measure 3
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Eighth))
    music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Quarter))
}
// Declare the variable at the global scope
// Define the function to calculate dotted duration
function calculateDottedDuration (originalDuration: number) {
    dottedDuration = originalDuration + originalDuration / 2
    return dottedDuration
}
let dottedDuration = 0
music.setTempo(40)
music.setVolume(128)
// this should play 1/8 low b natural 1/8 middle c 1/8 rest 1/8 middle c sharp barline
music.play(music.tonePlayable(247, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
music.rest(music.beat(BeatFraction.Eighth))
music.play(music.tonePlayable(277, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
// Play measures 2 and 3 twice
playMeasures2and3()
playMeasures2and3()
