// Vaesen Character Sheet JavaScript

class VaesenCharacterSheet {
    constructor() {
        this.character = this.getDefaultCharacter();
        this.ageData = this.getAgeData();
        this.talentData = this.getTalentData();
        this.equipmentData = this.getEquipmentData();
        this.souvenirTable = this.getSouvenirTable();
        this.resourceData = this.getResourceData();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateTalents();
        this.populateEquipment();
        this.updateTalentSlots();
        this.updateAttributePoints();
        this.updateSkillPoints();
    }

    getDefaultCharacter() {
        return {
            name: '',
            age: '',
            archetype: '',
            motivation: '',
            trauma: '',
            darkSecret: '',
            attributes: {
                fisico: 2,
                precisao: 2,
                logica: 2,
                empatia: 2
            },
            skills: {
                agilidade: 0, combateCorpoACorpo: 0, forca: 0,
                combateADistancia: 0, furtividade: 0, medicina: 0,
                aprendizado: 0, investigacao: 0, vigilancia: 0,
                inspiracao: 0, manipulacao: 0, observacao: 0
            },
            talents: ['', '', ''],
            equipment: {
                armas: [],
                protecoes: [],
                equipamentos: [],
                souvenir: ''
            },
            xp: 0,
            level: 1,
            resourceLevel: '3',
            relationships: [{ name: '', description: '' }],
            conditions: {
                physical: [false, false, false, false],
                mental: [false, false, false, false]
            }
        };
    }

    // Calcula pontos máximos baseado no nível atual do personagem
    getMaxPointsByLevel(pointType = 'attribute') {
        const age = this.character.age;
        const level = parseInt(document.getElementById('characterLevel')?.value) || 1;
        
        if (!age || !this.ageData[age]) {
            // Valores padrão se não houver idade selecionada
            const basePoints = pointType === 'attribute' ? 16 : 20;
            return this.calculatePointsForLevel(basePoints, level, pointType);
        }
        
        const basePoints = pointType === 'attribute' 
            ? this.ageData[age].attributePoints 
            : this.ageData[age].skillPoints;
            
        return this.calculatePointsForLevel(basePoints, level, pointType);
    }
    
    // Calcula pontos para um nível específico
    calculatePointsForLevel(basePoints, level, pointType) {
        // A cada nível após o 1º, ganha pontos extras
        const levelBonus = Math.max(0, level - 1);
        
        if (pointType === 'attribute') {
            // Para atributos: +1 ponto a cada 2 níveis (arredondado para baixo)
            return basePoints + Math.floor(levelBonus / 2);
        } else if (pointType === 'skill') {
            // Para perícias: +2 pontos por nível
            return basePoints + (levelBonus * 2);
        } else if (pointType === 'talent') {
            // Para talentos: começa com 3, +1 a cada 2 níveis
            return 3 + Math.floor(levelBonus / 2);
        }
        
        return basePoints;
    }

    // Calcula valor máximo individual para atributos baseado no nível
    getMaxAttributeValue(level) {
        // Nível 1-2: máximo 5, depois +1 a cada 2 níveis
        return 5 + Math.floor((level - 1) / 2);
    }

    // Calcula valor máximo individual para perícias baseado no nível
    getMaxSkillValue(level) {
        // Nível 1-2: máximo 3, depois +1 a cada 2 níveis
        return 3 + Math.floor((level - 1) / 2);
    }

    getAgeData() {
        return {
            crianca: {
                name: 'Criança',
                range: '6-12 anos',
                attributePoints: 14,
                skillPoints: 8,
                description: 'Crianças são curiosas e corajosas, mas também vulneráveis. Começam com menos pontos mas podem se desenvolver rapidamente.',
                characteristics: [
                    'Curiosidade natural e coragem inesperada',
                    'Menor força física, mas maior agilidade mental',
                    'Capacidade de ver coisas que adultos ignoram',
                    'Desenvolvimento rápido de habilidades'
                ]
            },
            adolescente: {
                name: 'Adolescente',
                range: '13-19 anos',
                attributePoints: 15,
                skillPoints: 12,
                description: 'Adolescentes estão descobrindo o mundo e si mesmos. Têm energia e determinação, mas podem ser impulsivos.',
                characteristics: [
                    'Energia abundante e determinação forte',
                    'Tendência à impulsividade e rebeldia',
                    'Rápida adaptação a novas situações',
                    'Formação da identidade pessoal'
                ]
            },
            adulto: {
                name: 'Adulto',
                range: '20-49 anos',
                attributePoints: 16,
                skillPoints: 20,
                description: 'Adultos são experientes e equilibrados. Têm a maior quantidade de pontos para distribuir.',
                characteristics: [
                    'Experiência balanceada em todas as áreas',
                    'Maior quantidade de pontos disponíveis',
                    'Estabilidade emocional e mental',
                    'Pico da capacidade física e intelectual'
                ]
            },
            idoso: {
                name: 'Idoso',
                range: '50+ anos',
                attributePoints: 15,
                skillPoints: 25,
                description: 'Idosos têm muita experiência e sabedoria, mas podem ter limitações físicas. Muitos pontos de perícia.',
                characteristics: [
                    'Vasta experiência de vida e sabedoria',
                    'Maior quantidade de pontos de perícia',
                    'Possíveis limitações físicas',
                    'Compreensão profunda da natureza humana'
                ]
            }
        };
    }

    getTalentData() {
        return TALENTOS_VAESEN;
    }

    getEquipmentData() {
        return EQUIPAMENTOS_VAESEN;
    }

    getSouvenirTable() {
        return {
            11: 'Uma moeda antiga e desgasta',
            12: 'Um pequeno espelho de mão ornamentado',
            13: 'Uma chave sem fechadura conhecida',
            14: 'Um relógio de bolso parado',
            15: 'Uma fotografia desbotada de pessoas desconhecidas',
            16: 'Um frasco vazio com aroma persistente',
            21: 'Um anel com inscrições estranhas',
            22: 'Um mapa incompleto de lugar desconhecido',
            23: 'Uma boneca de porcelana rachada',
            24: 'Um livro em idioma desconhecido',
            25: 'Uma caixinha de música quebrada',
            26: 'Um amuleto de material não identificado',
            31: 'Uma carta de amor não enviada',
            32: 'Um desenho infantil perturbador',
            33: 'Um pedaço de tecido bordado',
            34: 'Uma pequena estatueta de animal',
            35: 'Um diário com páginas em branco',
            36: 'Uma colher de prata manchada',
            41: 'Um sino que não produz som',
            42: 'Uma lente de aumento com arranhões',
            43: 'Um pente de marfim partido',
            44: 'Uma miniatura de casa desconhecida',
            45: 'Um cordão com pingente misterioso',
            46: 'Uma pedra polida com formato estranho',
            51: 'Um dedal de metal escurecido',
            52: 'Uma partitura de música inquietante',
            53: 'Um vidro com líquido colorido',
            54: 'Uma agulha de costura muito fina',
            55: 'Um botão de madeira entalhada',
            56: 'Uma folha seca perfeitamente preservada',
            61: 'Um cristal de cor cambiante',
            62: 'Uma miniatura de navio em garrafa',
            63: 'Um marcador de livro ornamentado',
            64: 'Uma pequena caixa que não abre',
            65: 'Um lenço com bordado complexo',
            66: 'Um objeto que muda quando não observado'
        };
    }

    getResourceData() {
        return {
            1: 'Indigente - Vive na miséria, sem posses ou lar fixo. Depende da caridade alheia.',
            2: 'Pobre - Possui o mínimo para sobreviver. Moradia precária, roupas remendadas.',
            3: 'Classe Baixa - Trabalhador comum. Casa simples, alimentação básica garantida.',
            4: 'Classe Média Baixa - Emprego estável. Casa própria pequena, algumas economias.',
            5: 'Classe Média - Vida confortável. Casa bem mobiliada, pode viajar ocasionalmente.',
            6: 'Classe Média Alta - Próspero profissional. Casa grande, empregados, luxos moderados.',
            7: 'Rico - Pessoa abastada. Mansão, vários empregados, investimentos substanciais.',
            8: 'Muito Rico - Extremamente rico. Múltiplas propriedades, influência política e social.'
        };
    }

    setupEventListeners() {
        // Character image
        document.getElementById('characterImageArea').addEventListener('click', () => {
            document.getElementById('characterImageInput').click();
        });
        
        document.getElementById('characterImageInput').addEventListener('change', (e) => {
            this.handleImageUpload(e);
        });
        
        // XP and Level management
        document.getElementById('characterXP').addEventListener('input', (e) => {
            this.updateLevel(parseInt(e.target.value) || 0);
        });
        
        // Level change listener
        document.getElementById('characterLevel').addEventListener('change', () => {
            this.updateAttributePoints();
            this.updateSkillPoints();
            this.updateTalentSlots();
        });
        
        // Age button
        const ageBtn = document.getElementById('ageBtn');
        if (ageBtn) {
            ageBtn.addEventListener('click', () => {
                this.showAgeModal();
            });
        }

        // Archetype button
        const archetypeBtn = document.getElementById('archetypeBtn');
        if (archetypeBtn) {
            archetypeBtn.addEventListener('click', () => {
                this.showArchetypeModal();
            });
        }

        // Resource button
        const resourceBtn = document.getElementById('resourceBtn');
        if (resourceBtn) {
            resourceBtn.addEventListener('click', () => {
                document.getElementById('resourceModal').style.display = 'block';
                document.body.style.overflow = 'hidden';
                this.updateResourceSelection();
            });
        }

        // Attribute buttons
        document.querySelectorAll('.attribute-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const attr = e.target.dataset.attr;
                const isPlus = e.target.classList.contains('attribute-plus');
                const input = document.getElementById(attr);
                let currentValue = parseInt(input.value) || 2;
                const level = parseInt(document.getElementById('characterLevel')?.value) || 1;
                const maxAttributeValue = this.getMaxAttributeValue(level);
                
                if (isPlus && currentValue < maxAttributeValue) {
                    currentValue++;
                } else if (!isPlus && currentValue > 2) {
                    currentValue--;
                }
                
                input.value = currentValue;
                this.character.attributes[attr] = currentValue;
                this.updateAttributePoints();
            });
        });

        // Skill buttons
        document.querySelectorAll('.skill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const skill = e.target.dataset.skill;
                const isPlus = e.target.classList.contains('skill-plus');
                const input = document.getElementById(skill);
                let currentValue = parseInt(input.value) || 0;
                const level = parseInt(document.getElementById('characterLevel')?.value) || 1;
                const maxSkillValue = this.getMaxSkillValue(level);
                
                if (isPlus && currentValue < maxSkillValue) {
                    currentValue++;
                } else if (!isPlus && currentValue > 0) {
                    currentValue--;
                }
                
                input.value = currentValue;
                this.character.skills[skill] = currentValue;
                this.updateSkillPoints();
            });
        });

        // Skill inputs
        Object.keys(this.character.skills).forEach(skill => {
            const element = document.getElementById(skill);
            if (element) {
                element.addEventListener('input', (e) => {
                    this.character.skills[skill] = parseInt(e.target.value) || 0;
                    this.updateSkillPoints();
                });
            }
        });

        // Add talent button
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-talent-btn')) {
                this.addNewTalent();
            }
        });

        // Archetype selection
        // Removido - agora é tratado pelo modal

        // Save/Load buttons
        document.getElementById('saveBtn').addEventListener('click', () => this.saveCharacter());
        document.getElementById('loadBtn').addEventListener('click', () => this.loadCharacter());

        // Relationships
        document.getElementById('addRelationship').addEventListener('click', () => this.addRelationship());

        // Add new talent slot
        document.getElementById('addCustomTalent').addEventListener('click', () => this.addNewTalent());

        // Equipment dropdowns
        document.addEventListener('click', (e) => {
            if (e.target.closest('.equipment-dropdown-header')) {
                const dropdown = e.target.closest('.equipment-dropdown');
                const content = dropdown.querySelector('.equipment-dropdown-content');
                const arrow = dropdown.querySelector('.dropdown-arrow');
                
                // Fechar outros dropdowns abertos
                document.querySelectorAll('.equipment-dropdown').forEach(dd => {
                    if (dd !== dropdown) {
                        dd.classList.remove('open');
                        dd.querySelector('.dropdown-arrow').textContent = '▼';
                    }
                });
                
                // Toggle atual
                dropdown.classList.toggle('open');
                arrow.textContent = dropdown.classList.contains('open') ? '▲' : '▼';
            }
            
            // Fechar dropdown se clicar fora
            else if (!e.target.closest('.equipment-dropdown')) {
                document.querySelectorAll('.equipment-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('open');
                    dropdown.querySelector('.dropdown-arrow').textContent = '▼';
                });
            }
        });

        // Custom souvenir
        document.getElementById('customSouvenirBtn').addEventListener('click', () => this.showCustomSouvenirModal());

        // Condition buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.condition-btn')) {
                const btn = e.target.closest('.condition-btn');
                const condition = btn.dataset.condition;
                const index = parseInt(btn.dataset.index);
                this.toggleCondition(condition, index, btn);
            }
        });

        // Souvenir roll
        document.getElementById('rollSouvenirBtn').addEventListener('click', () => this.showSouvenirModal());

        // Modal close buttons
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                e.target.closest('.modal').style.display = 'none';
                document.body.style.overflow = '';
            });
        });

        // File input for loading
        document.getElementById('fileInput').addEventListener('change', (e) => {
            this.handleFileLoad(e);
        });

        // Resource selection
        document.querySelectorAll('.resource-card').forEach(card => {
            card.addEventListener('click', () => {
                const level = card.dataset.level;
                const levelText = card.querySelector('.resource-name').textContent;
                
                this.character.resourceLevel = level;
                document.getElementById('resourceLevel').value = level;
                document.getElementById('resourceText').textContent = `${level} - ${levelText}`;
                
                document.getElementById('resourceModal').style.display = 'none';
                document.body.style.overflow = '';
            });
        });

        // Click outside modal to close
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        // Talent dropdown toggle
        document.addEventListener('click', (e) => {
            // Toggle dropdown
            if (e.target.closest('.talent-dropdown-header')) {
                const dropdown = e.target.closest('.talent-dropdown');
                const content = dropdown.querySelector('.talent-dropdown-content');
                const arrow = dropdown.querySelector('.dropdown-arrow');
                
                // Fechar outros dropdowns abertos
                document.querySelectorAll('.talent-dropdown').forEach(dd => {
                    if (dd !== dropdown) {
                        dd.classList.remove('open');
                        dd.querySelector('.dropdown-arrow').textContent = '▼';
                    }
                });
                
                // Toggle atual
                dropdown.classList.toggle('open');
                arrow.textContent = dropdown.classList.contains('open') ? '▲' : '▼';
            }
            
            // Fechar dropdown se clicar fora
            else if (!e.target.closest('.talent-dropdown')) {
                document.querySelectorAll('.talent-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('open');
                    dropdown.querySelector('.dropdown-arrow').textContent = '▼';
                });
            }
        });
    }

    updateAttributePoints() {
        // Calcular pontos lendo diretamente dos inputs
        const fisico = parseInt(document.getElementById('fisico').value) || 2;
        const precisao = parseInt(document.getElementById('precisao').value) || 2;
        const logica = parseInt(document.getElementById('logica').value) || 2;
        const empatia = parseInt(document.getElementById('empatia').value) || 2;
        
        const usedPoints = fisico + precisao + logica + empatia;
        
        // Atualizar também o character object
        this.character.attributes = { fisico, precisao, logica, empatia };
        
        const counter = document.getElementById('attributePoints');
        const maxPoints = this.getMaxPointsByLevel('attribute');
        counter.textContent = `Pontos usados: ${usedPoints}`;
        
        // Aplicar classes baseado nos pontos
        counter.className = 'points-counter';
        
        if (usedPoints > maxPoints) {
            counter.classList.add('error');
        } else if (usedPoints === maxPoints) {
            counter.classList.add('success');
        }
    }

    updateSkillPoints() {
        const usedPoints = Object.values(this.character.skills).reduce((sum, val) => sum + val, 0);
        const maxPoints = this.getMaxPointsByLevel('skill');
        
        const counter = document.getElementById('skillPoints');
        if (!counter) return;

        counter.textContent = `Pontos de perícia usados: ${usedPoints}`;
        
        counter.className = 'points-counter';
        if (usedPoints > maxPoints) {
            counter.classList.add('error');
        } else if (usedPoints === maxPoints) {
            counter.classList.add('success');
        }
    }

    updateTalentSlots() {
        const talentsContainer = document.getElementById('talentsContainer');
        
        if (!talentsContainer) return;
        
        // Limpar container e recriar
        talentsContainer.innerHTML = '';
        
        // Criar slots de talentos existentes
        for (let i = 0; i < this.character.talents.length; i++) {
            const talentSlot = this.createTalentSlot(i);
            talentsContainer.appendChild(talentSlot);
        }
    }

    createTalentSlot(index) {
        const slot = document.createElement('div');
        slot.className = 'talent-slot';
        
        const talent = this.character.talents[index];
        const hasTalent = talent && talent.trim() !== '';
        
        if (hasTalent) {
            // Se tem talento, criar dropdown
            const [talentName, talentDescription] = this.parseTalentNameAndDescription(talent);
            slot.innerHTML = `
                <div class="talent-dropdown-wrapper">
                    <div class="talent-dropdown" data-index="${index}">
                        <div class="talent-dropdown-header">
                            <span class="talent-name">${talentName}</span>
                            <span class="dropdown-arrow">▼</span>
                        </div>
                        <div class="talent-dropdown-content">
                            <p class="talent-description">${talentDescription}</p>
                            <button type="button" class="change-talent-btn" onclick="vaesenSheet.showTalentModal(${index})">
                                Trocar Talento
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Se não tem talento, manter botão original
            slot.innerHTML = `
                <div class="talent-select-wrapper">
                    <button type="button" class="talent-btn" onclick="vaesenSheet.showTalentModal(${index})">
                        Selecione um talento
                    </button>
                </div>
            `;
        }
        
        return slot;
    }

    parseTalentNameAndDescription(talent) {
        // Se o talento contém ":", é um talento personalizado
        if (talent.includes(':')) {
            const parts = talent.split(':');
            const name = parts[0].trim();
            const description = parts.slice(1).join(':').trim();
            return [name, description];
        }
        
        // Buscar na biblioteca de talentos do talentos.js
        const talentData = this.findTalentInLibrary(talent);
        if (talentData) {
            return [talentData.nome, talentData.descricao];
        }
        
        // Se não encontrou, é um talento que só tem nome (não deveria acontecer)
        return [talent, 'Talento sem descrição disponível'];
    }

    findTalentInLibrary(talentName) {
        // Buscar em todas as categorias de talentos
        const data = this.talentData;
        
        // Buscar nos talentos por arquétipo
        if (data.porArquetipo) {
            for (const arquetipo in data.porArquetipo) {
                const talentos = data.porArquetipo[arquetipo];
                if (Array.isArray(talentos)) {
                    const found = talentos.find(t => t.nome === talentName);
                    if (found) return found;
                }
            }
        }
        
        // Buscar nos talentos gerais
        if (data.gerais && Array.isArray(data.gerais)) {
            const found = data.gerais.find(t => t.nome === talentName);
            if (found) return found;
        }
        
        return null;
    }

    addNewTalent() {
        this.character.talents.push('');
        this.updateTalentSlots();
    }

    removeTalent(index) {
        this.character.talents.splice(index, 1);
        this.updateTalentSlots();
    }

    showTalentModal(talentIndex) {
        this.currentTalentIndex = talentIndex;
        const modal = document.getElementById('talentModal');
        
        // Resetar para a tela de categorias
        this.showTalentCategories();
        
        // Bloquear scroll do body
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
    }

    showTalentCategories() {
        // Mostrar tela de categorias, ocultar lista de talentos
        document.getElementById('talentCategories').style.display = 'block';
        document.getElementById('talentsList').style.display = 'none';
        document.getElementById('talentBackBtn').style.display = 'none';
        document.getElementById('talentModalTitle').textContent = 'Biblioteca de Talentos';
        
        const categoriesGrid = document.querySelector('.talent-categories-grid');
        categoriesGrid.innerHTML = '';
        
        // Criar cards para arquetipos
        Object.keys(TALENTOS_VAESEN.porArquetipo).forEach(arquetipo => {
            const card = this.createTalentCategoryCard(arquetipo, 'arquetipo');
            categoriesGrid.appendChild(card);
        });
        
        // Criar card para talentos gerais
        const generalCard = this.createTalentCategoryCard('Gerais', 'geral');
        categoriesGrid.appendChild(generalCard);
    }

    createTalentCategoryCard(categoryName, categoryType) {
        const card = document.createElement('div');
        card.className = 'talent-category-card';
        
        let icon = '⚡';
        let description = 'Talentos especializados';
        
        if (categoryType === 'geral') {
            icon = '✨';
            description = 'Talentos disponíveis para todos';
        } else {
            // Ícones únicos e criativos por arquétipo
            const icons = {
                'Acadêmico': '🎓',
                'Andarilho': '🥾',
                'Caçador': '�',
                'Escritora': '✒️',
                'Médica': '🩺',
                'Ocultista': '🔮',
                'Oficial': '🎖️',
                'Padre': '⛪',
                'Serviçal': '🔧',
                'Veterana': '🛡️'
            };
            icon = icons[categoryName] || '⚡';
        }
        
        card.innerHTML = `
            <div class="talent-category-icon">${icon}</div>
            <div class="talent-category-name">${categoryName}</div>
            <div class="talent-category-description">${description}</div>
            <div class="talent-category-count">${this.getTalentCount(categoryName, categoryType)} talentos</div>
        `;
        
        card.addEventListener('click', () => {
            this.showTalentsByCategory(categoryName, categoryType);
        });
        
        return card;
    }

    getTalentCount(categoryName, categoryType) {
        if (categoryType === 'geral') {
            return TALENTOS_VAESEN.gerais.length;
        } else {
            return TALENTOS_VAESEN.porArquetipo[categoryName]?.length || 0;
        }
    }

    showTalentsByCategory(categoryName, categoryType) {
        // Ocultar categorias, mostrar lista de talentos
        document.getElementById('talentCategories').style.display = 'none';
        document.getElementById('talentsList').style.display = 'block';
        document.getElementById('talentBackBtn').style.display = 'flex';
        document.getElementById('talentModalTitle').textContent = `Talentos - ${categoryName}`;
        document.getElementById('talentCategorySubtitle').textContent = 
            categoryType === 'geral' ? 'Talentos gerais disponíveis para todos' : `Talentos do arquétipo ${categoryName}`;
        
        const talentsGrid = document.getElementById('talentsGrid');
        talentsGrid.innerHTML = '';
        
        // Obter talentos da categoria
        let talents = [];
        if (categoryType === 'geral') {
            talents = TALENTOS_VAESEN.gerais;
        } else {
            talents = TALENTOS_VAESEN.porArquetipo[categoryName] || [];
        }
        
        // Criar cards para cada talento
        talents.forEach((talento, index) => {
            const card = this.createTalentCard(talento, index, categoryName, categoryType);
            talentsGrid.appendChild(card);
        });
        
        // Configurar botão de voltar
        document.getElementById('talentBackBtn').onclick = () => {
            this.showTalentCategories();
        };
    }

    createTalentCard(talento, index, categoryName, categoryType) {
        const card = document.createElement('div');
        card.className = 'talent-card';
        card.setAttribute('data-talent', talento.nome);
        
        // Marcar como selecionado se for o talento atual
        if (this.character.talents[this.currentTalentIndex] === talento.nome) {
            card.classList.add('selected');
        }
        
        // Verificar se é um talento válido para o personagem
        let isValidTalent = true;
        let validationMessage = '';
        
        if (categoryType === 'arquetipo' && this.character.archetype) {
            // Verificar se o talento pertence ao arquétipo do personagem
            const playerArchetype = this.getArchetypeNameFromKey(this.character.archetype);
            if (categoryName !== playerArchetype) {
                isValidTalent = false;
                validationMessage = `Este talento é específico do arquétipo ${categoryName}`;
            }
        }
        
        card.innerHTML = `
            <div class="talent-card-header">
                <div class="talent-name">${talento.nome}</div>
                ${categoryType === 'geral' ? '<div class="talent-badge general">Geral</div>' : `<div class="talent-badge archetype">${categoryName}</div>`}
            </div>
            <div class="talent-description">${talento.descricao}</div>
            ${!isValidTalent ? `<div class="talent-validation-warning">${validationMessage}</div>` : ''}
            <button class="talent-select-btn ${!isValidTalent ? 'disabled' : ''}" 
                    onclick="vaesenSheet.selectTalent('${talento.nome}', ${isValidTalent})" 
                    ${!isValidTalent ? 'disabled' : ''}>
                ${isValidTalent ? 'Escolher' : 'Indisponível'}
            </button>
        `;
        
        return card;
    }

    getArchetypeNameFromKey(archetypeKey) {
        // Converter a chave do arquétipo de volta para o nome completo
        const arquetipo = ARQUETIPOS_VAESEN.find(a => a.nome.toLowerCase() === archetypeKey);
        return arquetipo ? arquetipo.nome : '';
    }

    selectTalent(talentName, isValid = true) {
        if (!isValid) return;
        
        // Atualizar o talento no índice correto
        this.character.talents[this.currentTalentIndex] = talentName;
        
        // Atualizar a interface
        this.updateTalentSlots();
        
        // Fechar modal e restaurar scroll
        document.getElementById('talentModal').style.display = 'none';
        document.body.style.overflow = '';
        
        // Feedback visual
        this.showTalentSelectedFeedback(talentName);
    }

    showTalentSelectedFeedback(talentName) {
        // Criar um toast notification
        const toast = document.createElement('div');
        toast.className = 'talent-toast';
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">⚡</span>
                <span class="toast-text">Talento selecionado: <strong>${talentName}</strong></span>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Mostrar e depois remover
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    populateTalents() {
        // Este método agora é simplificado pois os talentos são selecionados via modal
        // Não precisamos mais povoar selects, apenas garantir que a interface esteja atualizada
        this.updateTalentSlots();
    }

    showAgeModal() {
        const modal = document.getElementById('ageModal');
        const grid = document.getElementById('agesGrid');
        
        // Limpar grid existente
        grid.innerHTML = '';
        
        // Criar cards para cada idade
        Object.entries(this.ageData).forEach(([key, ageData]) => {
            const card = this.createAgeCard(key, ageData);
            grid.appendChild(card);
        });
        
        // Bloquear scroll do body
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
    }

    createAgeCard(ageKey, ageData) {
        const card = document.createElement('div');
        card.className = 'age-card';
        card.setAttribute('data-age', ageKey);
        
        // Marcar como selecionado se for a idade atual
        if (this.character.age === ageKey) {
            card.classList.add('selected');
        }
        
        card.innerHTML = `
            <div class="age-name">${ageData.name}</div>
            <div class="age-range">${ageData.range}</div>
            
            <div class="age-stats">
                <div class="age-stat">
                    <div class="age-detail-label">Atributos</div>
                    <div class="age-detail-value">${ageData.attributePoints}</div>
                </div>
                <div class="age-stat">
                    <div class="age-detail-label">Perícias</div>
                    <div class="age-detail-value">${ageData.skillPoints}</div>
                </div>
            </div>
            
            <button class="age-select-btn" onclick="vaesenSheet.selectAge('${ageKey}')">Escolher</button>
        `;
        
        return card;
    }

    selectAge(ageKey) {
        const ageData = this.ageData[ageKey];
        if (!ageData) return;
        
        // Atualizar character data
        this.character.age = ageKey;
        
        // Atualizar o botão de seleção
        const ageBtn = document.getElementById('ageText');
        ageBtn.textContent = `${this.getAgeIcon(ageKey)} ${ageData.name} (${ageData.range})`;
        
        // Atualizar o campo hidden
        document.getElementById('age').value = ageKey;
        
        // Atualizar contadores de pontos
        this.updateAttributePoints();
        this.updateSkillPoints();
        
        // Fechar modal e restaurar scroll
        document.getElementById('ageModal').style.display = 'none';
        document.body.style.overflow = '';
        
        // Feedback visual
        this.showAgeSelectedFeedback(ageData.name, ageData.attributePoints, ageData.skillPoints);
    }

    getAgeIcon(ageKey) {
        const icons = {
            'crianca': '👶',
            'adolescente': '🧒',
            'adulto': '🧑',
            'idoso': '👴'
        };
        return icons[ageKey] || '👤';
    }

    showAgeSelectedFeedback(ageName, attrPoints, skillPoints) {
        // Criar um toast notification
        const toast = document.createElement('div');
        toast.className = 'age-toast';
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">${this.getAgeIcon(this.character.age)}</span>
                <div class="toast-text">
                    <strong>Idade selecionada: ${ageName}</strong><br>
                    <small>Atributos: ${attrPoints} | Perícias: ${skillPoints}</small>
                </div>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Mostrar e depois remover
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    updateResourceSelection() {
        const currentLevel = this.character.resourceLevel;
        
        // Remover seleção anterior
        document.querySelectorAll('.resource-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Marcar card atual como selecionado
        if (currentLevel) {
            const selectedCard = document.querySelector(`[data-level="${currentLevel}"]`);
            if (selectedCard) {
                selectedCard.classList.add('selected');
            }
        }
    }

    showResourceInfo() {
        const modal = document.getElementById('resourceModal');
        const infoDiv = document.getElementById('resourceInfo');
        
        let html = '';
        Object.entries(this.resourceData).forEach(([level, description]) => {
            html += `<div class="resource-description"><strong>Nível ${level}:</strong> ${description}</div>`;
        });
        
        infoDiv.innerHTML = html;
        modal.style.display = 'block';
    }

    handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Verificar se é uma imagem
        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecione apenas arquivos de imagem.');
            return;
        }

        // Verificar tamanho (máximo 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('A imagem deve ter no máximo 5MB.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const imageArea = document.getElementById('characterImageArea');
            
            // Remover o placeholder e adicionar a imagem
            imageArea.innerHTML = `
                <img src="${e.target.result}" alt="Imagem do Personagem" class="character-image">
                <div class="image-overlay">
                    <button class="change-image-btn" onclick="document.getElementById('characterImageInput').click()">
                        📷 Alterar
                    </button>
                </div>
            `;
            
            // Salvar a imagem no character data
            this.character.image = e.target.result;
        };
        
        reader.readAsDataURL(file);
    }

    updateLevel(xp) {
        // Calcular nível baseado no XP (a cada 5 XP = 1 nível)
        const level = Math.floor(xp / 5) + 1;
        
        // Atualizar o campo de nível
        document.getElementById('characterLevel').value = level;
        
        // Salvar no character data
        this.character.xp = xp;
        this.character.level = level;
    }

    showArchetypeModal() {
        const modal = document.getElementById('archetypeModal');
        const grid = document.getElementById('archetypesGrid');
        
        // Limpar grid existente
        grid.innerHTML = '';
        
        // Criar cards para cada arquétipo
        ARQUETIPOS_VAESEN.forEach((arquetipo, index) => {
            const card = this.createArchetypeCard(arquetipo, index);
            grid.appendChild(card);
        });
        
        // Bloquear scroll do body
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
    }

    createArchetypeCard(arquetipo, index) {
        const card = document.createElement('div');
        card.className = 'archetype-card';
        card.setAttribute('data-archetype', arquetipo.nome.toLowerCase());
        
        // Marcar como selecionado se for o arquétipo atual
        if (this.character.archetype === arquetipo.nome.toLowerCase()) {
            card.classList.add('selected');
        }
        
        card.innerHTML = `
            <div class="archetype-name">${arquetipo.nome}</div>
            <div class="archetype-description">Especialista em ${arquetipo.atributoPrincipal} e ${arquetipo.periciaPrincipal}</div>
            
            <div class="archetype-main-info">
                <div class="archetype-attribute">
                    <div class="archetype-detail-label">Atributo</div>
                    <div class="archetype-detail-value">${arquetipo.atributoPrincipal}</div>
                </div>
                <div class="archetype-skill">
                    <div class="archetype-detail-label">Perícia</div>
                    <div class="archetype-detail-value">${arquetipo.periciaPrincipal}</div>
                </div>
            </div>
            
            <button class="archetype-expand-btn" onclick="this.parentElement.querySelector('.archetype-details').classList.toggle('expanded'); this.textContent = this.textContent === 'Ver Detalhes' ? 'Ocultar Detalhes' : 'Ver Detalhes';">Ver Detalhes</button>
            
            <div class="archetype-details">
                <div class="archetype-detail-section">
                    <h5>⚡ Talentos</h5>
                    <div class="archetype-list">
                        <ul>
                            ${arquetipo.talentos.map(talento => `<li>${talento}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="archetype-detail-section">
                    <h5>💰 Recursos</h5>
                    <div class="archetype-list">Nível ${arquetipo.recursos}</div>
                </div>
                
                <div class="archetype-detail-section">
                    <h5>🎒 Equipamentos</h5>
                    <div class="archetype-list">
                        <ul>
                            ${arquetipo.equipamento.map(equip => `<li>${equip}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <button class="archetype-select-btn" onclick="vaesenSheet.selectArchetype('${arquetipo.nome}')">Escolher ${arquetipo.nome}</button>
        `;
        
        return card;
    }

    selectArchetype(archetypeName) {
        const arquetipo = ARQUETIPOS_VAESEN.find(a => a.nome === archetypeName);
        if (!arquetipo) return;
        
        // Atualizar character data
        this.character.archetype = arquetipo.nome.toLowerCase();
        
        // Atualizar o botão de seleção
        const archetypeBtn = document.getElementById('archetypeText');
        archetypeBtn.textContent = `${this.getArchetypeIcon(arquetipo.nome)} ${arquetipo.nome}`;
        
        // Atualizar o campo hidden
        document.getElementById('archetype').value = arquetipo.nome.toLowerCase();
        
        // Atualizar slots de talentos para refletir o novo arquétipo
        this.updateTalentSlots();
        
        // Fechar modal e restaurar scroll
        document.getElementById('archetypeModal').style.display = 'none';
        document.body.style.overflow = '';
        
        // Feedback visual
        this.showArchetypeSelectedFeedback(arquetipo.nome);
    }

    getArchetypeIcon(archetypeName) {
        const icons = {
            'Acadêmico': '📚',
            'Caçador': '🏹',
            'Detetive Particular': '🔍',
            'Jornalista': '📰',
            'Médico': '⚕️',
            'Ocultista': '🔮',
            'Padre': '✝️',
            'Policial Militar': '⚔️',
            'Serviçal': '🛎️',
            'Veterano': '🎖️'
        };
        return icons[archetypeName] || '👤';
    }

    showArchetypeSelectedFeedback(archetypeName) {
        // Criar um toast notification
        const toast = document.createElement('div');
        toast.className = 'archetype-toast';
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">${this.getArchetypeIcon(archetypeName)}</span>
                <span class="toast-text">Arquétipo selecionado: <strong>${archetypeName}</strong></span>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Mostrar e depois remover
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    showSouvenirModal() {
        const modal = document.getElementById('souvenirModal');
        this.rollSouvenir();
        modal.style.display = 'block';
        
        // Setup souvenir modal buttons
        document.getElementById('acceptSouvenir').onclick = () => {
            const description = document.getElementById('souvenirDescription').textContent;
            this.character.equipment.souvenir = description;
            this.updateSouvenirDisplay();
            modal.style.display = 'none';
            this.showToast('Souvenir adicionado!', 'success');
        };
        
        document.getElementById('rerollSouvenir').onclick = () => {
            this.rollSouvenir();
        };
    }

    rollSouvenir() {
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        const roll = parseInt(`${d1}${d2}`);
        
        document.getElementById('souvenirRoll').textContent = roll;
        document.getElementById('souvenirDescription').textContent = this.souvenirTable[roll] || 'Souvenir misterioso e único';
    }

    addRelationship() {
        const container = document.getElementById('relationshipsContainer');
        const relationshipDiv = document.createElement('div');
        relationshipDiv.className = 'relationship-item';
        relationshipDiv.innerHTML = `
            <input type="text" placeholder="Nome do PJ" class="relationship-name">
            <textarea placeholder="Descrição do relacionamento" class="relationship-desc"></textarea>
            <button class="remove-relationship">❌</button>
        `;
        
        relationshipDiv.querySelector('.remove-relationship').addEventListener('click', () => {
            relationshipDiv.remove();
        });
        
        container.appendChild(relationshipDiv);
    }

    saveCharacter() {
        this.collectFormData();
        const characterData = JSON.stringify(this.character, null, 2);
        localStorage.setItem('vaesenCharacter', characterData);
        alert('Personagem salvo com sucesso!');
    }

    loadCharacter() {
        document.getElementById('fileInput').click();
    }

    handleFileLoad(event) {
        const file = event.target.files[0];
        if (!file) {
            // Try loading from localStorage instead
            const saved = localStorage.getItem('vaesenCharacter');
            if (saved) {
                try {
                    this.character = JSON.parse(saved);
                    this.populateForm();
                    alert('Personagem carregado do armazenamento local!');
                } catch (e) {
                    alert('Erro ao carregar personagem do armazenamento local.');
                }
            } else {
                alert('Nenhum personagem salvo encontrado.');
            }
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                this.character = JSON.parse(e.target.result);
                this.populateForm();
                alert('Personagem carregado com sucesso!');
            } catch (error) {
                alert('Erro ao carregar arquivo. Verifique se é um arquivo JSON válido.');
            }
        };
        reader.readAsText(file);
    }

    exportCharacter() {
        this.collectFormData();
        const characterData = JSON.stringify(this.character, null, 2);
        const blob = new Blob([characterData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.character.name || 'personagem'}_vaesen.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }

    newCharacter() {
        if (confirm('Tem certeza que deseja criar uma nova ficha? Todos os dados não salvos serão perdidos.')) {
            this.character = this.getDefaultCharacter();
            this.populateForm();
        }
    }

    collectFormData() {
        // Basic info
        this.character.name = document.getElementById('characterName').value;
        this.character.age = document.getElementById('age').value;
        this.character.archetype = document.getElementById('archetype').value;
        this.character.motivation = document.getElementById('motivation').value;
        this.character.trauma = document.getElementById('trauma').value;
        this.character.darkSecret = document.getElementById('darkSecret').value;

        // Attributes
        ['fisico', 'precisao', 'logica', 'empatia'].forEach(attr => {
            this.character.attributes[attr] = parseInt(document.getElementById(attr).value) || 2;
        });

        // Skills
        Object.keys(this.character.skills).forEach(skill => {
            const element = document.getElementById(skill);
            if (element) {
                this.character.skills[skill] = parseInt(element.value) || 0;
            }
        });

        // Talents - collect from dynamic list
        this.character.talents = [];
        document.querySelectorAll('[name^="talent"]').forEach(select => {
            this.character.talents.push(select.value);
        });

        // Resources
        this.character.resourceLevel = document.getElementById('resourceLevel').value;

        // Relationships
        const relationships = [];
        document.querySelectorAll('.relationship-item').forEach(item => {
            const name = item.querySelector('.relationship-name').value;
            const description = item.querySelector('.relationship-desc').value;
            if (name || description) {
                relationships.push({ name, description });
            }
        });
        this.character.relationships = relationships;

        // Equipment
        this.character.equipment = {
            general: document.getElementById('generalEquipment').value,
            weapons: document.getElementById('weapons').value,
            armor: document.getElementById('armor').value,
            souvenir: document.getElementById('souvenir').value
        };

        // Conditions
        this.character.conditions.physical = Array.from(document.querySelectorAll('[name^="physical"]')).map(cb => cb.checked);
        this.character.conditions.mental = Array.from(document.querySelectorAll('[name^="mental"]')).map(cb => cb.checked);
    }

    populateForm() {
        // Basic info
        document.getElementById('characterName').value = this.character.name || '';
        
        // XP and Level
        document.getElementById('characterXP').value = this.character.xp || 0;
        document.getElementById('characterLevel').value = this.character.level || 1;
        
        // Character image
        if (this.character.image) {
            const imageArea = document.getElementById('characterImageArea');
            imageArea.innerHTML = `
                <img src="${this.character.image}" alt="Imagem do Personagem" class="character-image">
                <div class="image-overlay">
                    <button class="change-image-btn" onclick="document.getElementById('characterImageInput').click()">
                        📷 Alterar
                    </button>
                </div>
            `;
        }
        
        // Age - update button text
        if (this.character.age && this.ageData[this.character.age]) {
            const ageData = this.ageData[this.character.age];
            document.getElementById('ageText').textContent = `${this.getAgeIcon(this.character.age)} ${ageData.name} (${ageData.range})`;
            document.getElementById('age').value = this.character.age;
        } else {
            document.getElementById('ageText').textContent = 'Selecione a idade';
            document.getElementById('age').value = '';
        }
        
        // Archetype - update button text
        if (this.character.archetype) {
            const arquetipo = ARQUETIPOS_VAESEN.find(a => a.nome.toLowerCase() === this.character.archetype);
            if (arquetipo) {
                document.getElementById('archetypeText').textContent = `${this.getArchetypeIcon(arquetipo.nome)} ${arquetipo.nome}`;
                document.getElementById('archetype').value = this.character.archetype;
            }
        } else {
            document.getElementById('archetypeText').textContent = 'Escolha seu arquétipo';
            document.getElementById('archetype').value = '';
        }
        
        document.getElementById('motivation').value = this.character.motivation || '';
        document.getElementById('trauma').value = this.character.trauma || '';
        document.getElementById('darkSecret').value = this.character.darkSecret || '';

        // Resource Level - update button text
        if (this.character.resourceLevel) {
            const resourceNames = {
                1: "Miserável",
                2: "Pobre",
                3: "Classe Baixa",
                4: "Classe Média",
                5: "Classe Alta"
            };
            const resourceName = resourceNames[this.character.resourceLevel] || "Classe Baixa";
            document.getElementById('resourceText').textContent = `${this.character.resourceLevel} - ${resourceName}`;
            document.getElementById('resourceLevel').value = this.character.resourceLevel;
        } else {
            document.getElementById('resourceText').textContent = '3 - Classe Baixa';
            document.getElementById('resourceLevel').value = '3';
        }

        // Attributes
        Object.entries(this.character.attributes).forEach(([attr, value]) => {
            document.getElementById(attr).value = value;
        });

        // Skills
        Object.entries(this.character.skills).forEach(([skill, value]) => {
            const element = document.getElementById(skill);
            if (element) {
                element.value = value;
            }
        });

        // Populate talents after archetype is set
        this.populateTalents();
        
        // Update talent slots with current level
        this.updateTalentSlots();
        
        // Resources
        document.getElementById('resourceLevel').value = this.character.resourceLevel || '3';

        // Relationships
        const container = document.getElementById('relationshipsContainer');
        container.innerHTML = '';
        this.character.relationships.forEach(rel => {
            this.addRelationship();
            const lastItem = container.lastElementChild;
            lastItem.querySelector('.relationship-name').value = rel.name;
            lastItem.querySelector('.relationship-desc').value = rel.description;
        });
        if (this.character.relationships.length === 0) {
            this.addRelationship();
        }

        // Equipment
        if (this.character.equipment) {
            document.getElementById('generalEquipment').value = this.character.equipment.general || '';
            document.getElementById('weapons').value = this.character.equipment.weapons || '';
            document.getElementById('armor').value = this.character.equipment.armor || '';
            document.getElementById('souvenir').value = this.character.equipment.souvenir || '';
        }

        // Conditions
        if (this.character.conditions) {
            document.querySelectorAll('[name^="physical"]').forEach((cb, index) => {
                cb.checked = this.character.conditions.physical[index] || false;
            });
            document.querySelectorAll('[name^="mental"]').forEach((cb, index) => {
                cb.checked = this.character.conditions.mental[index] || false;
            });
        }
        
        // Update all counters
        this.updateAttributePoints();
        this.updateSkillPoints();
    }

    // === EQUIPMENT MANAGEMENT ===
    populateEquipment() {
        this.updateEquipmentDisplay();
        this.updateSouvenirDisplay();
    }

    updateEquipmentDisplay() {
        ['armas', 'protecoes', 'equipamentos'].forEach(category => {
            this.updateEquipmentCategory(category);
        });
    }

    updateEquipmentCategory(category) {
        const container = document.getElementById(`${category}Container`);
        if (!container) return;

        container.innerHTML = '';
        
        const items = this.character.equipment[category] || [];
        items.forEach((item, index) => {
            const itemElement = this.createEquipmentItem(item, category, index);
            container.appendChild(itemElement);
        });
    }

    createEquipmentItem(item, category, index) {
        const div = document.createElement('div');
        div.className = 'equipment-item';
        
        const equipData = this.findEquipmentData(item, category);
        const displayText = equipData ? this.formatEquipmentDisplay(equipData) : item;
        
        div.innerHTML = `
            <div class="equipment-item-content">
                <span class="equipment-name">${displayText}</span>
                <button type="button" class="remove-equipment-btn" onclick="vaesenSheet.removeEquipment('${category}', ${index})" title="Remover item">×</button>
            </div>
        `;
        
        return div;
    }

    formatEquipmentDisplay(equipData) {
        let display = equipData.nome;
        
        if (equipData.dano) {
            display += ` (Dano: ${equipData.dano})`;
        }
        if (equipData.protecao) {
            display += ` (Proteção: ${equipData.protecao})`;
        }
        if (equipData.bonus && equipData.bonus !== '—') {
            display += ` (${equipData.bonus})`;
        }
        
        return display;
    }

    findEquipmentData(itemName, category) {
        const categoryMap = {
            'armas': ['armasCorpoACorpo', 'armasDistancia'],
            'protecoes': ['protecoes'],
            'equipamentos': ['equipamentosGerais']
        };
        
        const categories = categoryMap[category] || [];
        
        for (const cat of categories) {
            if (this.equipmentData[cat]) {
                const found = this.equipmentData[cat].find(item => item.nome === itemName);
                if (found) return found;
            }
        }
        
        return null;
    }

    showEquipmentModal(category) {
        this.currentEquipmentCategory = category;
        const modal = document.getElementById('equipmentModal');
        
        // Resetar para a tela de categorias
        this.showEquipmentCategories(category);
        
        // Bloquear scroll do body
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
    }

    showEquipmentCategories(targetCategory) {
        // Mostrar tela de categorias, ocultar lista de equipamentos
        document.getElementById('equipmentCategories').style.display = 'block';
        document.getElementById('equipmentsList').style.display = 'none';
        document.getElementById('equipmentBackBtn').style.display = 'none';
        
        const categoryMap = {
            'armas': {
                title: 'Biblioteca de Armas',
                categories: [
                    { key: 'armasCorpoACorpo', name: 'Armas Corpo a Corpo', icon: '⚔️', description: 'Espadas, machados, facas e outras armas de combate próximo' },
                    { key: 'armasDistancia', name: 'Armas à Distância', icon: '🏹', description: 'Arcos, rifles, pistolas e outras armas de longo alcance' }
                ]
            },
            'protecoes': {
                title: 'Biblioteca de Proteções',
                categories: [
                    { key: 'protecoes', name: 'Armaduras e Proteções', icon: '🛡️', description: 'Armaduras leves, médias e pesadas para proteção em combate' }
                ]
            },
            'equipamentos': {
                title: 'Biblioteca de Equipamentos',
                categories: [
                    { key: 'equipamentosGerais', name: 'Equipamentos Gerais', icon: '⚒️', description: 'Ferramentas, instrumentos e objetos úteis para aventuras' }
                ]
            }
        };
        
        const config = categoryMap[targetCategory];
        document.getElementById('equipmentModalTitle').textContent = config.title;
        
        const categoriesGrid = document.querySelector('.equipment-categories-grid');
        categoriesGrid.innerHTML = '';
        
        config.categories.forEach(category => {
            const card = this.createEquipmentCategoryCard(category);
            categoriesGrid.appendChild(card);
        });
    }

    createEquipmentCategoryCard(category) {
        const card = document.createElement('div');
        card.className = 'equipment-category-card';
        card.setAttribute('data-category', category.key);
        
        const itemCount = this.equipmentData[category.key] ? this.equipmentData[category.key].length : 0;
        
        card.innerHTML = `
            <div class="equipment-category-icon">${category.icon}</div>
            <div class="equipment-category-name">${category.name}</div>
            <div class="equipment-category-description">${category.description}</div>
            <div class="equipment-category-count">${itemCount} itens</div>
        `;
        
        card.addEventListener('click', () => {
            this.showEquipmentsByCategory(category.key);
        });
        
        return card;
    }

    showEquipmentsByCategory(categoryKey) {
        // Mostrar lista de equipamentos, ocultar categorias
        document.getElementById('equipmentCategories').style.display = 'none';
        document.getElementById('equipmentsList').style.display = 'block';
        document.getElementById('equipmentBackBtn').style.display = 'block';
        
        // Configurar botão de volta
        const backBtn = document.getElementById('equipmentBackBtn');
        backBtn.onclick = () => this.showEquipmentCategories(this.currentEquipmentCategory);
        
        // Atualizar título
        const categoryNames = {
            'armasCorpoACorpo': 'Armas Corpo a Corpo',
            'armasDistancia': 'Armas à Distância',
            'protecoes': 'Proteções',
            'equipamentosGerais': 'Equipamentos Gerais'
        };
        
        document.getElementById('equipmentModalTitle').textContent = categoryNames[categoryKey];
        document.getElementById('equipmentCategorySubtitle').textContent = `${categoryNames[categoryKey]} disponíveis`;
        
        // Popular equipamentos
        const equipmentsGrid = document.getElementById('equipmentsGrid');
        equipmentsGrid.innerHTML = '';
        
        const equipments = this.equipmentData[categoryKey] || [];
        equipments.forEach(equipment => {
            const card = this.createEquipmentCard(equipment);
            equipmentsGrid.appendChild(card);
        });
    }

    createEquipmentCard(equipment) {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        
        let statsHtml = '';
        if (equipment.dano) {
            statsHtml += `<div class="equipment-stat"><strong>Dano:</strong> ${equipment.dano}</div>`;
        }
        if (equipment.protecao) {
            statsHtml += `<div class="equipment-stat"><strong>Proteção:</strong> ${equipment.protecao}</div>`;
            if (equipment.agilidade) {
                statsHtml += `<div class="equipment-stat"><strong>Agilidade:</strong> ${equipment.agilidade}</div>`;
            }
        }
        if (equipment.alcance) {
            statsHtml += `<div class="equipment-stat"><strong>Alcance:</strong> ${equipment.alcance}</div>`;
        }
        if (equipment.bonus && equipment.bonus !== '—') {
            statsHtml += `<div class="equipment-stat"><strong>Bônus:</strong> ${equipment.bonus}</div>`;
        }
        if (equipment.disponibilidade && equipment.disponibilidade !== '—') {
            statsHtml += `<div class="equipment-stat"><strong>Disponibilidade:</strong> ${equipment.disponibilidade}</div>`;
        }
        if (equipment.pericia) {
            statsHtml += `<div class="equipment-stat"><strong>Perícia:</strong> ${equipment.pericia}</div>`;
        }
        if (equipment.efeito) {
            statsHtml += `<div class="equipment-effect">${equipment.efeito}</div>`;
        }
        
        card.innerHTML = `
            <div class="equipment-card-header">
                <div class="equipment-name">${equipment.nome}</div>
            </div>
            <div class="equipment-stats">
                ${statsHtml}
            </div>
        `;
        
        card.addEventListener('click', () => {
            this.selectEquipment(equipment.nome);
        });
        
        return card;
    }

    selectEquipment(equipmentName) {
        // Adicionar equipamento à lista do personagem
        if (!this.character.equipment[this.currentEquipmentCategory]) {
            this.character.equipment[this.currentEquipmentCategory] = [];
        }
        
        this.character.equipment[this.currentEquipmentCategory].push(equipmentName);
        
        // Atualizar interface
        this.updateEquipmentCategory(this.currentEquipmentCategory);
        
        // Fechar modal
        document.getElementById('equipmentModal').style.display = 'none';
        document.body.style.overflow = '';
        
        this.showToast(`Equipamento adicionado: ${equipmentName}`, 'success');
    }

    removeEquipment(category, index) {
        this.character.equipment[category].splice(index, 1);
        this.updateEquipmentCategory(category);
    }

    updateSouvenirDisplay() {
        const souvenirText = document.getElementById('souvenirText');
        if (souvenirText) {
            const souvenir = this.character.equipment.souvenir;
            souvenirText.textContent = souvenir || 'Nenhum souvenir definido';
        }
    }

    showCustomSouvenirModal() {
        const modal = document.getElementById('customSouvenirModal');
        
        // Limpar campo
        document.getElementById('customSouvenirText').value = this.character.equipment.souvenir || '';
        
        // Configurar eventos se ainda não foram configurados
        this.setupCustomSouvenirEvents();
        
        // Bloquear scroll do body
        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
    }

    setupCustomSouvenirEvents() {
        const createBtn = document.getElementById('createCustomSouvenir');
        const cancelBtn = document.getElementById('cancelCustomSouvenir');
        
        if (createBtn && !createBtn.hasAttribute('data-events-set')) {
            createBtn.addEventListener('click', () => this.createCustomSouvenir());
            createBtn.setAttribute('data-events-set', 'true');
        }
        
        if (cancelBtn && !cancelBtn.hasAttribute('data-events-set')) {
            cancelBtn.addEventListener('click', () => this.closeCustomSouvenirModal());
            cancelBtn.setAttribute('data-events-set', 'true');
        }
    }

    createCustomSouvenir() {
        const text = document.getElementById('customSouvenirText').value.trim();
        
        if (!text) {
            this.showToast('Por favor, descreva seu souvenir.', 'error');
            return;
        }
        
        // Salvar souvenir
        this.character.equipment.souvenir = text;
        this.updateSouvenirDisplay();
        
        // Fechar modal
        this.closeCustomSouvenirModal();
        
        this.showToast('Souvenir personalizado criado!', 'success');
    }

    closeCustomSouvenirModal() {
        document.getElementById('customSouvenirModal').style.display = 'none';
        document.body.style.overflow = '';
    }

    // === CONDITION MANAGEMENT ===
    toggleCondition(conditionType, index, buttonElement) {
        // Toggle a condição no character data
        this.character.conditions[conditionType][index] = !this.character.conditions[conditionType][index];
        
        // Atualizar visual do botão
        if (this.character.conditions[conditionType][index]) {
            buttonElement.classList.add('active');
        } else {
            buttonElement.classList.remove('active');
        }
    }
}

// Initialize the application when the page loads
let vaesenSheet;

document.addEventListener('DOMContentLoaded', () => {
    vaesenSheet = new VaesenCharacterSheet();
});
