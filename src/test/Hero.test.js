const assert = require('assert');
const SunnyScene = require('../assets/Scenes/SunnyScene.jsx');
const CloudyScene = require('../assets/Scenes/CloudyScene.jsx');
const RainScene = require('../assets/Scenes/RainScene.jsx');
const SnowScene = require('../assets/Scenes/SnowScene.jsx');
const StormScene = require('../assets/Scenes/StormScene.jsx');
const Hero = require('../components/Hero.jsx');

describe('Hero Component', function() {
  it('should return correct asset based on sky code', function() {
    assert.equal(Hero({ skyCode: 800 }).type, SunnyScene);
    assert.equal(Hero({ skyCode: 804 }).type, CloudyScene);
    assert.equal(Hero({ skyCode: 300 }).type, RainScene);
    assert.equal(Hero({ skyCode: 600 }).type, SnowScene);
    assert.equal(Hero({ skyCode: 200 }).type, StormScene);
  });

  it('should return null for unknown sky codes', function() {
    assert.equal(Hero({ skyCode: 999 }), null);
  });
});
