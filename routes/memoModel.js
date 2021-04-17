const PgPromise = require("pg-promise")();

class MemoModel{
  constructor() {
    this.db = PgPromise("postgres://postgres:postgres@localhost:5432/postgres");
  }

  create(memo) {
    let title = memo.title;
    let desc = memo.desc;

    return this.db.any('INSERT INTO memo(title, description) VALUES($1, $2) RETURNING id', [title, desc]);
  }

  readAll() {
    return this.db.any('SELECT * FROM memo');
  }

  read(id) {
    return this.db.any("SELSECT * FROM memo WHERE id = $1", [id]);
  }

  update(id, memo) {
    let title = memo.title;
    let desc = memo.desc;

    return this.db.any("UPDATE memo SET title = $1, description = $2 WHERE id = $3 REUTURNING id", [title, desc, id]);
  }

  delete(id) {
    return this.db.any('DELETE FROM memo WHERE id = $1 RETURNING id', [id]);
  }
}

module.exports = MemoModel;