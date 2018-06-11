<?php

class Tweet
{
  private $message;

  public function __construct(string $message)
  {
    $this->message = $message;
  }

  public function getMessage(): string
  {
    return $this->message;
  }
}

class RSS
{
  public function tweet(Tweet $tweet)
  {
    // Update RSS feed
  }
}

class Follower
{
  public function tweet(Tweet $tweet)
  {
    // Write tweet in feed
  }
}

class Email
{
  public function tweet(Tweet $tweet)
  {
    // Send and email
  }
}

class Twitter implements Observable
{
  private $observers = [];

  public function notify(Tweet $tweet)
  {
    foreach($this->observers as $observer)
    {
      $this->observer->tweet($tweet);
    }
  }
}


$twitter = new Twitter();

$twitter->attach(new RSS());
$twitter->attach(new Follower());
$twitter->attach(new Email());

$twitter->notify(new Tweet("Lorem ipsum"));
