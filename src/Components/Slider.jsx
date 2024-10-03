import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const InputSlider = styled.input`
  position: absolute;
  height: 0px;
  width: 260px;
  outline: none;
  pointer-events: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &.thumb-left {
    z-index: 3;
  }
  &.thumb-right {
    z-index: 4;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background: #d9ff5a;
    border: 2px solid #d9ff5a;
    border-radius: 50%;
    cursor: pointer;
    height: 21px;
    width: 21px;
    pointer-events: all;
    position: relative;
    background-clip: content-box;
    padding: 4px;
    box-shadow: inset 0 0 0 4px #ae97e8;
  }
  &::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
const SliderColors = styled.div`
  position: relative;
  width: 260px;
  top: -1.5px;

  .slider-track,
  .slider-range {
    position: absolute;
  }
  .slider-track,
  .slider-range {
    height: 3px;
  }
  .slider-range {
    background-color: #d9ff5a;
    z-index: 2;
  }
  .slider-track {
    background-color: #ffffff;
    width: 100%;
    z-index: 1;
  }
`;
const NumberInput = styled.input`
  width: 123px;
  height: 40px;
  border-radius: 11px;
  background: #ae97e8;
  margin: 0px;
  padding: 0px;
  border: unset;
  font-family: Euclid Circular A;
  font-weight: 500;
  color: white;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`;
const Title = styled.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  color: white;
  font-size: 18px;
  line-height: 27px;
  margin: 0px;
  margin-bottom: 20px;
`;

export function Slider({ min, max }) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [rangeLeft, setRangeLeft] = useState(0);
  const [rangeWidth, setRangeWidth] = useState(100);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);
    setRangeLeft(minPercent);
    setRangeWidth(maxPercent - minPercent);
  }, [minValue, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);

    setRangeWidth(maxPercent - minPercent);
  }, [maxValue, getPercent]);

  function ChangeMinValue(e) {
    let value = Math.min(e.target.value, maxValue - 1000);
    if (value < min) {
      value = min;
    }
    setMinValue(value);
  }
  function ChangeMaxValue(e) {
    let value = Math.max(e.target.value, minValue + 1000);
    if (value > max) {
      value = max;
    }
    setMaxValue(value);
  }
  return (
    <div style={{ padding: "20px 30px 30px 30px" }}>
      <Title>Цена</Title>
      <div style={{ marginBottom: 30 }}>
        <NumberInput
          type="number"
          value={minValue}
          onChange={(e) => ChangeMinValue(e)}
        />
        <NumberInput
          style={{ marginLeft: 14 }}
          type="number"
          value={maxValue}
          onChange={(e) => ChangeMaxValue(e)}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InputSlider
          className="thumb-left"
          type="range"
          min={min}
          max={max}
          value={minValue}
          step="1000"
          onChange={(e) => {
            ChangeMinValue(e);
          }}
        />
        <InputSlider
          className="thumb-right"
          type="range"
          min={min}
          max={max}
          step="1000"
          value={maxValue}
          onChange={(e) => {
            ChangeMaxValue(e);
          }}
        />

        <SliderColors>
          <div className="slider-track" />
          <div
            style={{ left: `${rangeLeft}%`, width: `${rangeWidth}%` }}
            className="slider-range"
          />
        </SliderColors>
      </div>
    </div>
  );
}
