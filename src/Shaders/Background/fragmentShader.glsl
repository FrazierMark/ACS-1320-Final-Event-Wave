
// uniforms
uniform float nodeUniform0; uniform float _time; 
// attributes

// varys
varying vec2 nodeVary0; 
// vars
float nodeVar0; float nodeVar1; float nodeVar2; float nodeVar3; float nodeVar4; vec2 nodeVar5; vec2 nodeVar6; vec2 nodeVar7; float nodeVar8; float nodeVar9; vec2 nodeVar10; vec4 nodeVar11; vec4 nodeVar12; vec4 nodeVar13; vec4 nodeVar14; 
// codes
float remap_tEQZqwJTM1eY ( float value, float minOld, float maxOld, float minNew, float maxNew ) {
		float x = ( value - minOld ) / ( maxOld - minOld );
		return minNew + ( maxNew - minNew ) * x;
	}
vec4 customFn_ibqYgV5WNTCk ( vec4 value, vec4 minOld, vec4 maxOld, vec4 minNew, vec4 maxNew ) {
                
    return vec4(
        remap_tEQZqwJTM1eY( value.x, minOld.x, maxOld.x, minNew.x, maxNew.x ),
        remap_tEQZqwJTM1eY( value.y, minOld.y, maxOld.y, minNew.y, maxNew.y ),
        remap_tEQZqwJTM1eY( value.z, minOld.z, maxOld.z, minNew.z, maxNew.z ),
        remap_tEQZqwJTM1eY( value.w, minOld.w, maxOld.w, minNew.w, maxNew.w )
    );
            
            }
vec2 customFn_lVVQM6wVbL0r ( vec2 uv, vec2 center, float radialScale, float lengthScale ) {
                
    
    // (^.^)   <3 <3
    vec2 delta = uv - center;
    float radius = length(delta) * 2.0 * radialScale;
    float angle = atan(delta.y, delta.x) * 1.0/6.28 * lengthScale;
    return vec2(radius, angle);
    
            }
vec2 customFn_Vt3hAuyyBfFT ( vec2 uv, vec2 center, float radialScale, float lengthScale ) {
                
    
    // (^.^)   <3 <3
    vec2 delta = uv - center;
    float radius = length(delta) * 2.0 * radialScale;
    float angle = atan(delta.y, delta.x) * 1.0/6.28 * lengthScale;
    return vec2(radius, angle);
    
            }

// variables
// </node_builder>

void main() {
	vec4 diffuseColor = vec4(0.81, 0.22, 0.11, 0.87);
	
	nodeVar0 = 0.0;
	nodeVar1 = ( 4.0 - 10000.0 );
	nodeVar2 = ( 50.0 - 2.0 );
	nodeVar3 = ( nodeVar1 * nodeVar2 );
	nodeVar4 = cos( nodeVar3 );
	nodeVar5 = customFn_Vt3hAuyyBfFT( vec2( nodeVary0.y ), vec2( nodeVar0 ), nodeVary0.x, nodeVar4 );
	nodeVar6 = customFn_lVVQM6wVbL0r( nodeVary0, nodeVar5, 4.2, nodeUniform0 );
	nodeVar7 = ( vec2( nodeVar6.x ) - nodeVary0 );
	nodeVar8 = ( _time * 0.6 );
	nodeVar9 = nodeVar8;
	nodeVar10 = ( nodeVar7 + vec2( nodeVar9 ) );
	nodeVar11 = ( vec4( nodeVar10.xy, 0.0, 1.0 ) * vec4( 1, 0.5490196078431373, 0, 1 ) );
	nodeVar12 = cos( nodeVar11 );
	nodeVar13 = customFn_ibqYgV5WNTCk( nodeVar12, vec4( vec3( 0.0 ), 1.0 ), vec4( vec3( 1.0 ), 1.0 ), vec4( vec3( 0.0 ), 1.0 ), vec4( vec3( 1.0 ), 1.0 ) );
	nodeVar14 = ( nodeVar13 * diffuseColor );
	
	diffuseColor = nodeVar14;

	gl_FragColor = diffuseColor;
}


