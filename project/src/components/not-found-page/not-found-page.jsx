import React from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="page">
      <Header />

      <main className="page__main">
        <div className="container">
          <section className="favorites">
            <h1>404. Page not found</h1>
            <Link to="/">Вернуться на главную</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
