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

class EspressoFactory
{
  public static function makeEspresso(): Espresso
  {
    return new Espresso(0,5, 'Peru');
  }
}

$espresso = ExpressoFactory::makeEspresso();

echo 'Origin : '.$espresso->getCoffeeOrigin();
echo 'Water : '.$espresso->getWater();
