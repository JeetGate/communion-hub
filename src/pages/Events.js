import React, { useState, useEffect } from "react";
import eventsData from "../data/events.json";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    category: "Religious",
  });

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleFilterChange = (e) => setCategoryFilter(e.target.value);
  const handleSearchChange = (e) => setSearchQuery(e.target.value.toLowerCase());

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", location: "", category: "Religious" });
  };

  const filteredEvents = events.filter((event) => {
    const matchesCategory = categoryFilter ? event.category === categoryFilter : true;
    const matchesSearch = searchQuery ? event.title.toLowerCase().includes(searchQuery) : true;
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case "Religious": return "bg-blue-500";
      case "Social": return "bg-green-500";
      case "Charity": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 overflow-y-auto h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Event Listings</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Events..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border p-2 rounded-lg w-full sm:w-1/3"
        />
        <select
          value={categoryFilter}
          onChange={handleFilterChange}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      {/* Enhanced Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className={`event-card border p-4 rounded-lg shadow-lg bg-white text-black transition-transform transform hover:scale-105 hover:shadow-2xl border-2 hover:border-yellow-400`}
          >
            <h2 className="text-xl font-semibold text-blue-600">{event.title}</h2>
            <p className="text-gray-500">{new Date(event.date).toLocaleDateString("en-GB")} - {event.location}</p>
            <span className={`inline-block px-3 py-1 text-sm text-white rounded-md ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
          </div>
        ))}
      </div>

      {/* Add New Event Section */}
      <h2 className="text-xl font-semibold mt-8 text-white">Add New Event</h2>
      <div className="mt-4 space-y-3">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-lg"
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-lg"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-lg"
        />
        <select
          name="category"
          value={newEvent.category}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-lg"
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
