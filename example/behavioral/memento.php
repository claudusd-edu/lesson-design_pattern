<?php

class Commit
{
  private $content;

  private $message;

  public function __construct(string $message, string $content)
  {
    $this->message = $message;
    $this->content = $content;
  }

  public function getContent(): string
  {
    return $this->content;
  }
}

class VCS
{
  protected $content = '';

  public function add(string $content)
  {
    $this->content .= $content;
  }

  public function getContent(): string
  {
    return $this->content;
  }

  public function commit(string $message)
  {
    return new Commit($message, $this->content);
  }

  public function checkout(Commit $commit)
  {
    $this->content = $commit->getContent();
  }
}

$vcs = new VCS();

$vcs->add('Lorem');
$commit = $this->commit('Save');
$vcs->add(' ipsum');
echo $vcs->getContent();
$vcs->checkout($commit);
echo $vcs->getContent();
