# Game of Life

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Some logic I could use:
I will need an reducer that updates the generation count and all the info for the components
Each component will have row attribute number and col number

If live then
Each component will need to be able to see the count of adjacent live tiles and dead tiles

## MVP Features

- [ ] Research Conway’s "Game of Life". Figure out how it works, why it’s useful, and how the notion of Turing Completeness is related to this topic.

The main entry point of your application should house the visualization of this cellular automaton. Include necessary components, such as:

- [ ] Grid to display cells.

Cell objects or components that, at a minimum, should have:

- [ ] current state: (alive, dead), (black, white)

- [ ] Clickable/Tappable can be clicked to allow user to setup initial cell configuration and
should NOT be clickable while simulation is running

- [ ] Toggle state functionality: switch between alive & dead either because user manually toggled cell before starting simulation or simulation is running and rules of life caused cell to change state

- [ ] An appropriate data structure to hold a grid of cells that is at least 25x25. Go as big as you want.

- [ ] Text to display current generation # being displayed

- [ ] Utilize a timeout function to build the next generation of cells & update the display at the chosen time interval

- [ ] Button(s) that start & stop the animation

- [ ] Button to clear the grid

Write an algorithm that:

Implements the following basic steps:

- [ ] For each cell in the current generation's grid:
- [ ] Examine state of all eight neighbors (it's up to you whether you want cells to wrap around the grid and consider cells on the other side or not)
- [ ]Apply rules of life to determine if this cell will change states
When main loop completes:
- [ ] Swap current and next grids
- [ ] Repeat until simulation stopped
- [ ] Breaks down above steps into appropriate sub-tasks implemented with helper functions to improve readability
- [ ] Uses double buffering to update grid with next generation.
- [ ] Does something well-documented with the edge of the grid. (e.g. wrap around to the far side--most fun!--or assumes all edge cells are permanently dead.)
