import React, { useReducer, useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  ThumbsUp,
  MessageSquare,
  Tag,
  CheckCircle,
  Award,
  Pin,
  Shield,
} from "lucide-react";
import { forumReducer, initialForumState } from "@/Reducers/forumReducer";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import toast from "react-hot-toast";
import LevelBadge from "@/Components/LevelBadge";

function ForumPage() {
  const [state, dispatch] = useReducer(forumReducer, initialForumState);
  const { threads, searchTerm, sortBy } = state;

  const [newThread, setNewThread] = useState({ title: "", content: "" });

  const filteredAndSortedThreads = useMemo(() => {
    let sortedThreads = [...threads].sort((a, b) => b.isPinned - a.isPinned);

    if (sortBy === "popularitas") {
      sortedThreads.sort((a, b) => b.votes - a.votes);
    } else if (sortBy === "terbaru") {
      sortedThreads.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (!searchTerm) {
      return sortedThreads;
    }
    return sortedThreads.filter((thread) =>
      thread.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [threads, searchTerm, sortBy]);

  const handleAddThread = (e) => {
    e.preventDefault();
    if (!newThread.title || !newThread.content) {
      toast.error("Judul dan isi pertanyaan tidak boleh kosong!");
      return;
    }

    const threadToAdd = {
      id: Date.now(),
      title: newThread.title,
      content: newThread.content,
      author: "Anda",
      authorLevel: "Newbie",
      date: new Date().toISOString(),
      votes: 0,
      replies: 0,
      tags: ["diskusi-baru"],
      solved: false,
      isPinned: false,
    };
    dispatch({ type: "ADD_THREAD", payload: threadToAdd });

    setNewThread({ title: "", content: "" });
    toast.success("Thread berhasil dibuat!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Forum Diskusi
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Temukan jawaban, ajukan pertanyaan, dan berdiskusi dengan sesama
                pembelajar.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-1/2">
            <Input
              id="search"
              type="text"
              placeholder="Cari diskusi berdasarkan judul..."
              onChange={(e) =>
                dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value })
              }
              className="pl-10"
            />
          </div>
          <div className="relative">
            <select
              onChange={(e) =>
                dispatch({ type: "SET_SORT_BY", payload: e.target.value })
              }
              className="appearance-none w-full md:w-auto bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="terbaru">Urutkan: Terbaru</option>
              <option value="popularitas">Urutkan: Terpopuler</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {filteredAndSortedThreads.map((thread) => (
              <div
                key={thread.id}
                className={`bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border transition-all ${
                  thread.isPinned
                    ? "border-yellow-400"
                    : "hover:border-indigo-300"
                }`}
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {thread.isPinned && (
                      <Pin
                        size={16}
                        className="inline-block mr-2 text-yellow-500"
                      />
                    )}
                    {thread.title}
                  </h3>
                  {thread.solved && (
                    <span className="flex-shrink-0 flex items-center text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      <CheckCircle size={14} className="mr-1.5" /> Terpecahkan
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center text-xs text-gray-500 gap-x-4 gap-y-2">
                  <span className="flex items-center gap-1.5">
                    oleh <strong>{thread.author}</strong>
                    <LevelBadge level={thread.authorLevel || "Newbie"} />
                  </span>
                  <span>
                    {new Date(thread.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp size={12} className="mr-1" />
                    {thread.votes} Votes
                  </span>
                  <span className="flex items-center">
                    <MessageSquare size={12} className="mr-1" />
                    {thread.replies} Balasan
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {thread.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full flex items-center"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end items-center gap-4">
                  <Button className="flex items-center text-xs text-gray-500 hover:text-green-600 bg-transparent p-0">
                    <Award size={14} className="mr-1" /> Beri Poin
                  </Button>
                  <Button className="flex items-center text-xs text-gray-500 hover:text-yellow-600 bg-transparent p-0">
                    <Pin size={14} className="mr-1" /> Pin Thread
                  </Button>
                  <Button className="flex items-center text-xs text-gray-500 hover:text-red-600 bg-transparent p-0">
                    <Shield size={14} className="mr-1" /> Laporkan
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <form
              onSubmit={handleAddThread}
              className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-2xl border h-fit sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Buat Thread Baru
              </h3>
              <Input
                id="newTitle"
                label="Judul Diskusi"
                type="text"
                placeholder="Apa yang ingin Anda tanyakan?"
                value={newThread.title}
                onChange={(e) =>
                  setNewThread({ ...newThread, title: e.target.value })
                }
              />
              <div className="mb-4">
                <label
                  htmlFor="newContent"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Isi Pertanyaan
                </label>
                <textarea
                  id="newContent"
                  placeholder="Jelaskan pertanyaan Anda secara detail..."
                  rows="5"
                  value={newThread.content}
                  onChange={(e) =>
                    setNewThread({ ...newThread, content: e.target.value })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 cursor-pointer"
              >
                Kirim
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumPage;
