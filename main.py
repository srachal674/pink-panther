def playMeasures2and3():
    # Play measure 2
    music.play(music.tone_playable(294, calculateDottedDuration(3 / 2)),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(calculateDottedDuration(3 / 4))
    music.play(music.tone_playable(220, calculateDottedDuration(3 / 2)),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(calculateDottedDuration(3 / 4))
    music.play(music.tone_playable(294, calculateDottedDuration(3 / 2)),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(calculateDottedDuration(3 / 4))
    music.rest(music.beat(BeatFraction.QUARTER))
    music.play(music.tone_playable(247, music.beat(BeatFraction.EIGHTH)),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.tone_playable(262, music.beat(BeatFraction.EIGHTH)),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play(music.tone_playable(277, music.beat(BeatFraction.EIGHTH)),
        music.PlaybackMode.UNTIL_DONE)
    # Play measure 3
    music.play(music.tone_playable(247, music.beat(BeatFraction.EIGHTH)),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.tone_playable(262, music.beat(BeatFraction.EIGHTH)),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(music.beat(BeatFraction.EIGHTH))
    music.play(music.tone_playable(277, music.beat(BeatFraction.EIGHTH)),
        music.PlaybackMode.UNTIL_DONE)
    music.rest(music.beat(BeatFraction.QUARTER))
# Declare the variable at the global scope
# Define the function to calculate dotted duration
def calculateDottedDuration(originalDuration: number):
    global dottedDuration
    dottedDuration = originalDuration + originalDuration / 2
    return dottedDuration
dottedDuration = 0
music.set_tempo(55)
music.set_volume(128)
# this should play 1/8 low b natural 1/8 middle c 1/8 rest 1/8 middle c sharp barline
music.play(music.tone_playable(247, music.beat(BeatFraction.EIGHTH)),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.tone_playable(262, music.beat(BeatFraction.EIGHTH)),
    music.PlaybackMode.UNTIL_DONE)
music.rest(music.beat(BeatFraction.EIGHTH))
music.play(music.tone_playable(277, music.beat(BeatFraction.EIGHTH)),
    music.PlaybackMode.UNTIL_DONE)
# Play measures 2 and 3 twice
playMeasures2and3()
playMeasures2and3()