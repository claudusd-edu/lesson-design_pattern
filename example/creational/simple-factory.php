<?php

interface Coffee
{

}

class Espresso implements Coffee
{
    protected $water;

    protected $coffeeOrigin;

    public function __construct(float $water, string $coffeeOrigin)
    {
        $this->water = $water;
        $this->coffeeOrigin = $coffeeOrigin;
    }

    public function getWater(): float
    {
      return $this->water;
    }

    public function getCoffeeOrigin(): string
    {
      return $this->coffeeOrigin;
    }
}

class CoffeeFactory
{
  public static function makeEspresso(): Espresso
  {
    return new Espresso(0,5, 'Peru');
  }
}

$espresso = CoffeeFactory::makeEspresso();

echo 'Origin : '.$espresso->getCoffeeOrigin();
echo 'Water : '.$espresso->getWater();

$expresso2 = CoffeeFactory::makeEspresso();
$expresso === $expresso2;
