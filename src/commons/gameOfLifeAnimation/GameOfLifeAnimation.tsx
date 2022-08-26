import React from 'react'
import { Box, hexToRgb, styled } from "@mui/material";
import Sketch from 'react-p5'
import p5Types from 'p5';
import { colors } from '../../theme';

type ColorMapProps = {
  [K in string]: number[];
}

interface GameOfLifeProps {
  effectRadius?: number;
  fadeToBlack?: boolean;
  frameRate?: number;
  mouseTrailEffect?: boolean;
  opacity?: number;
  resolution?: number;
}

const colorToRgbArray = (color: string) => {
  const rgbArray = hexToRgb(color).replace(/[^\d,]/g, '').split(',');
  return rgbArray.map((value) => parseInt(value));
}

const GameOfLifeAnimation = ({
  effectRadius = 8,
  fadeToBlack = true,
  frameRate = 8,
  mouseTrailEffect = true,
  opacity = 0.4,
  resolution = 10,
  }: GameOfLifeProps) => {
  
  let prefersReducedMotion: boolean | null;
  let grid: number[][];
  let cols: number;
  let rows: number;
  let r;
  let g;
  let b;
  const colorMap: ColorMapProps = {};
  const palette = [
    colorToRgbArray(colors.purple),
    colorToRgbArray(colors.magenta),
    colorToRgbArray(colors.orange),
    colorToRgbArray(colors.yellow),
    colorToRgbArray(colors.green),
    colorToRgbArray(colors.blue),
  ]
  fadeToBlack && palette.push([0,0,0])

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    p5.frameRate(frameRate)
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)

    cols = Math.ceil(p5.width / resolution);
    rows = Math.ceil(p5.height / resolution);
  
    grid = make2DArray(cols,rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = p5.floor(p5.random(prefersReducedMotion ? 1.3 : 2));
      }
    }
  }
  
  const draw = (p5: p5Types) => {
    p5.background(0);
    let incrementsPerColor;
    let currentIncrement;
    let currentColor;
    let nextColor;
  
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * resolution;
        const y = j * resolution;
        if (i === 0 && p5.frameCount === 1) {
  
          // Determine current color based on row iteration
          incrementsPerColor = rows/palette.length;
          currentIncrement = Math.floor(j/incrementsPerColor);
          currentColor = palette[currentIncrement];
  
          // Determine appropriate r,g,b values based on row position within currentColor
          r = currentColor[0];
          g = currentColor[1];
          b = currentColor[2];
          colorMap[j] = [r,g,b]
  
          // Determine the new current Color for next row
          nextColor = currentIncrement === palette.length - 1 ? fadeToBlack ? palette[palette.length-1] : palette[0] : palette[currentIncrement+1];
          currentColor[0] = (nextColor[0] - currentColor[0])/incrementsPerColor+currentColor[0]
          currentColor[1] = (nextColor[1] - currentColor[1])/incrementsPerColor+currentColor[1]
          currentColor[2] = (nextColor[2] - currentColor[2])/incrementsPerColor+currentColor[2]
        }
  
        
        if (grid[i][j] === 1) {
          p5.fill(colorMap[j][0],colorMap[j][1],colorMap[j][2])
          p5.stroke(0);
          p5.strokeWeight(2);
          p5.rect(x,y,resolution - 1,resolution - 1);
        }
      }
    }
  
    const next = make2DArray(cols, rows);
  
    if(mouseTrailEffect) {
      const cursorPixel = {
        x: Math.floor(p5.mouseX/resolution), 
        y: Math.floor(p5.mouseY/resolution),
      }
    
      if(cursorPixel && cursorPixel.y > 0 && cursorPixel.y < rows && cursorPixel.x > 0 && cursorPixel.x < cols) {
        grid[cursorPixel.x][cursorPixel.y] = 1;
        for (let i = 1; i < effectRadius*2; i++) {
          const x = (cols + cursorPixel.x + Math.round(p5.random(-i,i))) % cols;
          const y = (rows + cursorPixel.y + Math.round(p5.random(-i,i))) % rows;
          grid[x][y] = 1;
        }
      }
    }
  
    // Compute next based on grid
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const state = grid[i][j];
  
        // Count live neighbours!
        const neighbours = countNeighbours(grid, i, j);
  
        if(state === 0 && neighbours === 3) {
          next[i][j] = 1;
        } else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
  
      }
    }
  
    prefersReducedMotion && p5.frameCount < 3 && p5.noLoop()
    grid = next;
  }

  function make2DArray(cols: number, rows: number) {
    const arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }
  
  function countNeighbours(grid: number[][], x: number, y: number) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
  
        const col = (x + i + cols) % cols;
        const row = (y + j + rows) % rows;
  
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  }

  return (
    <Box sx={{
      inset: 0,
      opacity: opacity,
      position: "absolute",
      zIndex: 0,
      "& .react-p5": {
        height: "100%",
        width: "100%",
      }
    }}>
      <Sketch setup={setup} draw={draw} />
    </Box>
  )
}

export default GameOfLifeAnimation