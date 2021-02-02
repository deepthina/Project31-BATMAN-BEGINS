const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drops = [];
var umbrella;
var maxDrops = 100;

var thunder1, thunder2, thunder3, thunder4, thunder;

function preload() {
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup() {

    engine = Engine.create();
    world = engine.world;

    createCanvas(600, 800);

    umbrella = new Umbrella(300, 590);


    for (var i = 0; i < maxDrops; i++) {
        drops.push(new Drops(random(0, 600), random(0, 800)));
    }


}

function draw() {

    background("black");

    Engine.update(engine);

    umbrella.display();


    for (var i = 0; i < maxDrops; i++) {
        drops[i].update();
        drops[i].display();

    }


    spawnThunders();

    drawSprites();
}

function spawnThunders() {
    

    if (frameCount % 60 === 0) {
        thunder = createSprite(random(10, 580), random(10, 20), 10, 10);
        thunder.scale = 0.5;
        thunder.lifetime=15;
        var rand = Math.round(random(1, 4));

        switch (rand) {
            case 1: thunder.addImage(thunder1);
                break;
            case 2: thunder.addImage(thunder2);
                break;
            case 3: thunder.addImage(thunder3);
                break;
            case 4: thunder.addImage(thunder4);
                break;
            default: break;
        }

    }

}