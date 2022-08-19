import React, { useRef, useEffect } from 'react'
import { colors } from '../../../theme';

const GameOfLifeAnimation = (props: any) => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  let grid;
  let cols;
  let rows;
  const resolution = 10;
  // let r;
  // let g;
  // let b;
  // let colorMap = {};
  // const palette = [
  //   colors.purple,
  //   colors.magenta,
  //   colors.orange,
  //   colors.yellow,
  //   colors.green,
  //   colors.blue,
  // ]
  // let mouseTrailEffect = true; // pixels trail from the mouse cursor;
  // let effectRadius = 4;

  const make2DArray = (cols: number, rows: number) => {
    const arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  const random = (min: number, max?: number) => {
    let _min, _max;
    if (!max) {
      _max = min;
      _min = 0;
    } else {
      _min = min;
      _max = max;
    }
    return Math.floor(Math.random() * _max) + _min;
  }

  const setup = (canvasRef: HTMLCanvasElement) => {
    const width = canvasRef.clientWidth;
    const height = canvasRef.clientHeight;

    cols = Math.ceil(width / resolution);
    rows = Math.ceil(height / resolution);

    grid = make2DArray(cols,rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = Math.floor(random(2));
      }
    }
  }
  
  useEffect(() => {
    
    const draw = (ctx: CanvasRenderingContext2D) => {
      if (ctx) {
        frameRef.current = requestAnimationFrame(() => draw(ctx));
      }
    }
    if(canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if(context) {
        setup(canvasRef.current)
        frameRef.current = requestAnimationFrame(() => draw(context));
      }
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, [])
  
  return <canvas ref={canvasRef} {...props}></canvas>
}

export default GameOfLifeAnimation


