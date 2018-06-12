<?php

Class Mysql
{
  public function openConnection()
  {

  }

  public function authenticate($password, $username)
  {

  }

  public function startTransaction()
  {

  }

  public function rollback()
  {

  }

  public function commit()
  {

  }

  public function closeConnection()
  {

  }

  public function execute(string $sql): string
  {

  }

}



// What function to call and the order for select all element in a table ?
// Methods: authenticate, openConnection, startTransaction, rollback
// commit, closeConnection, execute























class MysqlFacade
{
  private $mysql;

  private $username;

  private $password;

  public function __construct(
    Mysql $mysql,
    string $username,
    string $password
  )
  {
      $this->mysql = $mysql;
      $this->username = $username;
      $this->password = $password;
  }

  public function selectAll($table)
  {
    try {
      $this->mysql->openConnection();
      $this->mysql->authenticate($this->password, $this->username);
      $this->mysql->execute($table);
    } catch(\Exception $e) {

    } finally {
      $this->mysql->closeConnection();
    }
  }
}

$mysql = new MysqlFacade(new Mysql(), 'Me', 'Pass');
$mysql->selectAll('user');
