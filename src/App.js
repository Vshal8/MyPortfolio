import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Welcome to My Portfolio </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About Me</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about" className="p-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>Brief bio goes here.</p>
      </section>
      <section id="projects" className="p-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <img src="/path/to/image.jpg" alt="Project 1" className="w-full h-32 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">Project 1</h3>
            <p>Description of project 1.</p>
          </div>
        </div>
      </section>
      <section id="skills" className="p-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p>Skills list goes here.</p>
      </section>
      <section id="experience" className="p-4">
        <h2 className="text-2xl font-bold">Experience</h2>
        <p>Experience details go here.</p>
      </section>
      <section id="contact" className="p-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p>Contact information goes here.</p>
      </section>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
