<?php

class Coffee
{
  private static $COUNT = 0;

  private $origin;

  private $id;

  public function __construct($origin)
  {
    $this->origin = $origin;
    $this->id = ++self::$COUNT;
  }

  public function getOrigin(): string
  {
    return $this->origin;
  }

  public function getId(): int
  {
    return $this->id;
  }
}


class CoffeeMaker
{
  private $preparedCoffee;

  public function __construct()
  {
    $this->preparedCoffee = [];
  }

  public function make($origin): Coffee
  {
    if (isset($this->preparedCoffee[$origin])){
      $this->preparedCoffee[$origin] = new Coffee($origin);
    }
    return $this->preparedCoffee[$origin];
  }
}


class CoffeeShop
{
  private $orders;

  private $coffeeMaker;

  public function __construct(CoffeeMaker $coffeeMaker)
  {
    $this->coffeeMaker = $coffeeMaker;
    $this->orders = [];
  }

  public function takeOrder(string $origin, int $table)
  {
    $this->orders[$table] = $this->coffeeMaker->make($origin);
  }


  public function serve()
  {
    foreach ($this->orders as $tableNumber => $coffee) {
      echo "Serving coffee ".$coffee->getOrigin()
        ." (".$coffee->getId().") to table #".$table;
    }
  }
}


$coffeeShop = new CoffeeShop(new CoffeeMaker());
$coffeeShop->order('Peru', 5);
$coffeeShop->order('Argentina', 6);
$coffeeShop->order('Peru', 1);

$shop->server();
// Serving coffee Peru (1) to table #5
// Serving coffee Argentina (2) to table #6
// Serving coffee Peru (1) to table #1
