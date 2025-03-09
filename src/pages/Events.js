import React, { useState, useEffect } from "react";
import eventsData from "../data/events.json";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    category: "Religious",
  });

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", location: "", category: "Religious" });
  };

  const filteredEvents = categoryFilter
    ? events.filter((event) => event.category === categoryFilter)
    : events;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Event Listings</h1>

      <label className="mr-2">Filter by Category:</label>
      <select
        value={categoryFilter}
        onChange={handleFilterChange}
        className="border p-2 mb-4"
      >
        <option value="">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <ul>
        {filteredEvents.map((event, index) => (
          <li key={index} className="border p-4 mb-2 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.date} - {event.location}</p>
            <p>{event.category}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Add New Event</h2>
      <div className="mt-4 space-y-2">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <select
          name="category"
          value={newEvent.category}
          onChange={handleInputChange}
          className="border p-2 w-full"
        >
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button
          onClick={handleAddEvent}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default Events;
