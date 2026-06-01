const estadoInicial = document.getElementById("estado-inicial");
const loading = document.getElementById("loading");
const cards = document.getElementById("cards");
const btnBrasileirao = document.getElementById("btn-brasileirao");
const btnPremier = document.getElementById("btn-premier");

const API_KEY = "18bd5d921c75cd954d8295f33decb0c0";
let carregando = false;
 
btnBrasileirao.addEventListener("click", () => buscarDados(71, 2024));
btnPremier.addEventListener("click", () => buscarDados(39, 2023));

async function buscarDados(ligaId, temporada) {
    if (carregando) return;
    carregando = true;

    estadoInicial.classList.add("hidden");
    cards.innerHTML = "";
    loading.classList.remove("hidden");

    try {
        const url = `https://v3.football.api-sports.io/standings?league=${ligaId}&season=${temporada}`;
        
        const resposta = await fetch(url, {
            headers: {
                "x-apisports-key": API_KEY
            }
        });

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.errors && Object.keys(dados.errors).length > 0) {
            throw new Error(Object.values(dados.errors)[0]);
        }

        const tabela = dados?.response?.[0]?.league?.standings?.[0];

        if (!tabela || tabela.length === 0) {
            throw new Error("Dados da tabela não encontrados para este ano.");
        }

        renderizarTabela(tabela);

    } catch (erro) {
        cards.innerHTML = `
            <div class="col-span-full bg-red-500/10 border border-red-500/50 p-6 rounded-xl text-red-400 text-center">
                <p class="font-bold">⚠️ Erro ao carregar dados:</p>
                <p class="text-sm opacity-80">${erro.message}</p>
            </div>
        `;
    } finally {
        loading.classList.add("hidden");
        carregando = false;
    }
}

function renderizarTabela(times) {
    cards.innerHTML = ""; 

    times.forEach((item, index) => {
        const { team, rank, points } = item;

        const card = document.createElement("div");
        card.className = "card-time"; 
        
        card.style.setProperty("--delay", `${index * 0.05}s`);

        card.innerHTML = `
            <div class="flex items-center gap-4">
                <span class="text-xl font-black text-zinc-700 w-6">${rank}º</span>
                <img src="${team.logo}" alt="Escudo do ${team.name}" class="escudo" loading="lazy">
                <div>
                    <h3 class="font-bold text-white leading-tight text-sm md:text-base">${team.name}</h3>
                    <p class="text-[10px] text-zinc-500 uppercase tracking-widest">Série A</p>
                </div>
            </div>
            <div class="text-right">
                <div class="text-green-500 font-black text-xl leading-none">${points}</div>
                <div class="text-[10px] text-zinc-500 uppercase font-bold">PTS</div>
            </div>
        `;

        cards.appendChild(card);
    });
}