import React from "react";

export default function AboutPage() {
  const info = {
    name: "Brendan Beckmann but mostly goes by BB.",
    role: "He is the shop owner of Ghost Events & Gaming in Colorado.",
    bio: "BB has been been playing Yugioh since its induction back in 2002. He started to playing at the local level of Colorado in 2003 where Toys-R-Us was still around but better yet, hosted tournaments. It wasn't until 2005 that BB attended his first regional (Konami/Upper Deck sanctioned tournament). Two years later, he attended a Shonen Jump Championship in Phoneix (now called a Yugioh Championship Series since Upper Deck is no longer affiliated with Konami). In 2008, this would be the start of BB's competetive career as he would go to top is first SJC in Chicago.",
    hobbies:
      "Yugioh and card games are not the only passion in his life. He thoroughly enjoys anything basketball related and as a kid, enjoyed showing and training dogs.",
    shopCreation:
      "The shop was created for the simple reasons to go grow the game he loves, being able to offer space devoted to the game as well as service to easily get all the cards needed to be able to play without having to go online.",
    goals:
      "The future for the shop is all about growth for the game, the community and the competitive market. More specifically: BB is in pursuit of hosting a Yugioh Regional, double the size of his store and raise the bar for competitivity in Colorado to have other champions come out of the state.",
  };

  return (
    <div className="about-page">
      <h1>NOT a Ghost of His Former Self</h1>
      <section id="about-content">
        <h2>Ghost Events & Gaming</h2>
        <p>
          <strong>What's his name? </strong>
          {info.name}
        </p>
        <p>
          <strong>What does he do? </strong>
          {info.role}
        </p>
        <p>
          <strong>Who is he? </strong>
          {info.bio}
        </p>
        <p>
          <strong>What does he like? </strong>
          {info.hobbies}
        </p>
        <p>
          <strong>Why create Ghost Gaming? </strong>
          {info.shopCreation}
        </p>
        <p>
          <strong>What does the future have in "store"? </strong>
          {info.goals}
        </p>
      </section>
    </div>
  );
}
