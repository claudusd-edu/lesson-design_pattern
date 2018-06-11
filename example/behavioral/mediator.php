<?php

abstract class Collegue
{
  protected $mediator;

  public function setMediator(RestaurantMediator $mediator)
  {
    $this->mediator = $mediator;
  }
}

class Customer extends Collegue
{
  public function requestOrder()
  {
      $this->mediator->takeOrder();
  }

  public function receiveOrder(Order $order)
  {
      echo "Eat Order";
  }
}

class Waiter extends Collegue
{
    public function takeOrder()
    {
        $order = $this->mediator->makeOrder();
        $this->mediator->bringOrder($order);
    }
}


class Chef extends Collegue
{
  public function makeOrder()
  {
      retrurn new Order();
  }
}

interface RestaurantMediator
{
  public function takeOrder();

  public function makeOrder();

  public function bringOrder();
}

class Restaurant implements RestaurantMediator
{
  private $customer;

  private $waiter;

  private $chef;

  public function __construct(
    Customer $customer,
    Waiter $waiter,
    Chef $chef,
  ) {
      $this->customer = $customer;
      $this->waiter = $waiter;
      $this->chef = $chef;

      $this->customer->setMediator($this);
      $this->waiter->setMediator($this);
      $this->chef->setMediator($this);
  }

  public function takeOrder()
  {
    $this->waiter->takerOrder();
  }

  public function makeOrder()
  {
    return $this->chef->makerOrder();
  }

  public function bringOrder(Order $order)
  {
    $this->client->receiveOrder($order);
  }
}



$customer = new Customer();
$restaurant = new Restaurant(
    $customer,
    new Waiter(),
    new Chef()
);
$customer->requestOrder();
