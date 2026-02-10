import { useEffect, useRef, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [battle, setBattle] = useState(null);

  const fetchedIds = useRef(new Set());
  const observerRef = useRef(null);

  const LIMIT = 12;


  const attackSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2225/2225-preview.mp3");
  const evolveSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2750/2750-preview.mp3");

  /* FETCH POKEMON */
  const fetchPokemon = async () => {
    if (loading) return;
    setLoading(true);

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
    );
    const data = await res.json();

    const details = await Promise.all(
      data.results.map(async (p) => {
        const res = await fetch(p.url);
        return res.json();
      })
    );

    const unique = details.filter((p) => {
      if (fetchedIds.current.has(p.id)) return false;
      fetchedIds.current.add(p.id);
      return true;
    });

    setPokemon((prev) => [...prev, ...unique]);
    setOffset((prev) => prev + LIMIT);
    setLoading(false);
  };

  /* INITIAL LOAD */
  useEffect(() => {
    fetchPokemon();
  }, []);

  /* INFINITE SCROLL */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) fetchPokemon();
    });

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [pokemon]);

  /* ATTACK */
  const attack = () => {
    attackSound.play();
    document.getElementById("enemy").classList.add("shake");
    setTimeout(() => {
      document.getElementById("enemy").classList.remove("shake");
    }, 400);
  };

  /* EVOLUTION */
  const evolve = () => {
    evolveSound.play();
    document.getElementById("poke-img").classList.add("evolve");
    setTimeout(() => {
      document.getElementById("poke-img").classList.remove("evolve");
    }, 1200);
  };

  return (
    <div style={{ padding: "20px" }}>
      <style>{`
        body { background:#f0f2f5; }
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
        }
        .card {
          background:white;
          border-radius:14px;
          padding:15px;
          text-align:center;
          box-shadow:0 8px 20px rgba(0,0,0,.1);
          cursor:pointer;
          transition:.3s;
        }
        .card:hover { transform:translateY(-6px); }
        img { width:140px; animation:float 3s infinite; }
        @keyframes float {
          0%{transform:translateY(0)}
          50%{transform:translateY(-12px)}
          100%{transform:translateY(0)}
        }
        .modal {
          position:fixed; inset:0;
          background:rgba(0,0,0,.6);
          display:flex; align-items:center; justify-content:center;
        }
        .battle {
          background:white;
          width:320px;
          border-radius:14px;
          padding:20px;
          text-align:center;
          animation:pop .4s;
        }
        @keyframes pop { from{transform:scale(.7)} to{transform:scale(1)} }
        .shake { animation:shake .4s }
        @keyframes shake {
          0%{transform:translateX(0)}
          25%{transform:translateX(-8px)}
          50%{transform:translateX(8px)}
          75%{transform:translateX(-8px)}
          100%{transform:translateX(0)}
        }
        .evolve { animation:evolve 1.2s }
        @keyframes evolve {
          0%{transform:scale(1)}
          50%{transform:scale(1.5) rotate(10deg)}
          100%{transform:scale(1)}
        }
        button {
          padding:10px 20px;
          margin:6px;
          cursor:pointer;
        }
      `}</style>

      <h2 style={{ textAlign: "center" }}>Pokémon Battle Mode 🎮</h2>

      <div className="grid">
        {pokemon.map((p) => (
          <div
            key={p.id}
            className="card"
            onClick={() => setSelected(p)}
          >
            <img src={p.sprites.other["official-artwork"].front_default} />
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>

      <div ref={observerRef} style={{ height: 40 }} />

      {/* MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="battle" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.name}</h3>
            <img
              id="poke-img"
              src={selected.sprites.other["official-artwork"].front_default}
            />

            <p>HP: {selected.stats[0].base_stat}</p>

            <button onClick={attack}>⚔️ Attack</button>
            <button onClick={evolve}>✨ Evolve</button>
            <button onClick={() => setSelected(null)}>❌ Close</button>

            <div id="enemy" style={{ marginTop: 10 }}>
              👾 Enemy Pokémon
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
