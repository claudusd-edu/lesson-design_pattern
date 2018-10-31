<?php

$walletBalance = 50;
$pay = 80;
$paypalClient = new PaypalClient();
$credit = 0;


if ($walletBalance >= $pay) {
  echo "Pay with Wallet";
  $walletBalance -= $pay;
} elseif ($paypalClient->hasAmount($pay)) {
  echo "Pay with Paypal";
  $paypalClient->pay($pay);
} else {
  echo "Make Credit";
  $credit += $pay;
}


abstract class Account
{
  private $successor;

  final public function setNext(Account $account)
  {
      $this->successor = $successor;
  }

  abstract protected function doPay($ammount);

  final public function pay(float $ammount)
  {
    if ($this->canPay($amount)) {
          echo sprintf('Paid %s using %s' . PHP_EOL, $amount, get_called_class());
          $this->doPay($amount);
      } elseif ($this->successor) {
          echo sprintf('Cannot pay using %s. Proceeding ..' . PHP_EOL, get_called_class());
          $this->successor->pay($amount);
      } else {
          throw new Exception('None of the accounts have enough balance');
      }
    }
  }

  abstract public function canPay($amount): bool
}

class Wallet extends Account
{
    protected $balance;

    public function __construct(float $balance)
    {
      $this->balance = $balance;
    }

    protected function doPay($amount)
    {
        $this->balance -= $amount;
    }

    public function canPay($amount)
    {
      return $this->balance >= $amount;
    }
}

class Paypal extends Account
{
  private $client;

  public function __construct(PaypalClient $client)
  {
    $this->client = $client;
  }

  public function doPay($amount)
  {
    $this->client->pay($amount);
  }

  public function canPay($amount)
  {
      return $this->client->hasAmount($amount);
  }
}

class Credit extends Account
{
  private $credit;

  public function __construct()
  {
    $this->credit = 0;
  }

  public function doPay($amount)
  {
    $this->credit += $amount;
  }

  public function canPay($amount)
  {
    return true;
  }
}

$wallet = new Wallet(50);
$paypal = new Payapal(new PaypalClient());
$credit = new Credit();

$wallet->setNext($paypal);
$paypal->setNext($credit);

$wallet->pay(80);
