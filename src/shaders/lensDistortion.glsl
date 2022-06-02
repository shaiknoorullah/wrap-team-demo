export default function lensDistortionShaderDefinition()
{
    return{
        
        uniforms:{
            "tDiffuse":{type:"t",value:null},
            "strength":{type:"f",value:0},
            "height":{type:"f",value:1},
            "aspectRatio":{type:"f",value:1},
            "cylindricalRatio":{type:"f",value:1}
        },
        
        vertexShader:[
            "uniform float strength;",// s: 0 = perspective, 1 = stereographic
            "uniform float height;",// h: tan(verticalFOVInRadians / 2)
            "uniform float aspectRatio;",// a: screenWidth / screenHeight
            "uniform float cylindricalRatio;",// c: cylindrical distortion ratio. 1 = spherical
            
            "varying vec3 vUV;",// output to interpolate over screen
            "varying vec2 vUVDot;",// output to interpolate over screen
            
            "void main(){",
                "gl_Position=projectionMatrix*(modelViewMatrix*vec4(position,1.));",
                
                "float scaledHeight=strength*height;",
                "float cylAspectRatio=aspectRatio*cylindricalRatio;",
                "float aspectDiagSq=aspectRatio*aspectRatio+1.;",
                "float diagSq=scaledHeight*scaledHeight*aspectDiagSq;",
                "vec2 signedUV=(2.*uv+vec2(-1.,-1.));",
                
                "float z=.5*sqrt(diagSq+1.)+.5;",
                "float ny=(z-1.)/(cylAspectRatio*cylAspectRatio+1.);",
                
                "vUVDot=sqrt(ny)*vec2(cylAspectRatio,1.)*signedUV;",
                "vUV=vec3(.5,.5,1.)*z+vec3(-.5,-.5,0.);",
                "vUV.xy+=uv;",
            "}"
        ].join("\n"),
        
        fragmentShader:[
            "uniform sampler2D tDiffuse;",// sampler of rendered scene?s render target
            "varying vec3 vUV;",// interpolated vertex output data
            "varying vec2 vUVDot;",// interpolated vertex output data
            
            "void main(){",
                "vec3 uv=dot(vUVDot,vUVDot)*vec3(-.5,-.5,-1.)+vUV;",
                "gl_FragColor=texture2DProj(tDiffuse,uv);",
            "}"
        ].join("\n")
        
    };
}