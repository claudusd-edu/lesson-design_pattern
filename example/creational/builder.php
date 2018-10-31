<?php

class Sandwich
{
  private $cheese;

  private $meat;

  private $tomato;

  private $salad;

  public function __construct(
      bool $cheese,
      string $meat,
      bool $tomato,
      bool $salad
  ) {
      $this->cheese = $chesse;
      $this->meat = $meat;
      $this->tomato = $tomato;
      $this->salad = $this->salad;
  }
}

class SandwichBuilder
{
  public $cheese = false;
  public $meat = null;
  public $salad = false;
  public $tomato  = false;

  public function addCheese()
  {
    $this->cheese = true;
    return $this;
  }

  public function addTomato()
  {
    $this->tomato = true;
    return $this;
  }

  public function addSalad()
  {
    $this->salad = true;
    return $this;
  }

  public function setMeat($meat)
  {
    $this->meat = $meat;
    return $this;
  }

  public function build()
  {
    return new Sansdwich(
      $this->cheese,
      $this->meat,
      $this->tomato,
      $this->salad
    );
  }
}

$sandwichBuilder = new SandwichBuilder();
$sandwich = $sandwichBuilder->addSalad()->addCheese()
->setMeat('chicken');

$sandwich = $sandwichBuilder->build();






//
