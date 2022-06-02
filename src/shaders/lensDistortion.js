import React, { forwardRef, useMemo } from 'react';
import { Uniform } from 'three';
import { Effect } from 'postprocessing';

const fragmentShader = `float4 main(float2 tex : TEXCOORD0) : COLOR
{
    // lens distortion coefficient (between
    float k = -0.15;
    // cubic distortion value
    float kcube = 0.5;
    float r2 = (tex.x-0.5)*(tex.x-0.5) + (tex.y-0.5)*(tex.y-0.5);       
    float f = 0;
    if (kcube == 0.0) {
         f = 1 + r2 * k;
    } else {
         f = 1 + r2 * (k + kcube * sqrt(r2));
    };
    float x = f*(tex.x-0.5)+0.5;
    float y = f*(tex.y-0.5)+0.5;
    float3 inputDistord = tex2D(s0,float2(x,y));
    return float4(inputDistord.r,inputDistord.g,inputDistord.b,1);
}`;

let _uParam;

// Effect implementation
class lensDestortion extends Effect {
  constructor({ param = 0.1 } = {}) {
    super('MyCustomEffect', fragmentShader, {
      uniforms: new Map([['param', new Uniform(param)]]),
    });

    _uParam = param;
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get('param').value = _uParam;
  }
}

// Effect component
export const MyCustomEffect = forwardRef(({ param }, ref) => {
  const effect = useMemo(() => new lensDestortion(param), [param]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
