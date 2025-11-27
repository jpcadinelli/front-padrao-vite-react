let mockProducts = [
    { id: 1, nome: "Notebook Dell", preco: 4500, estoque: 10 },
    { id: 2, nome: "Mouse Gamer", preco: 150, estoque: 50 },
];

export const productMockService = {
    getAll() {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...mockProducts]), 300);
        });
    },

    getById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const p = mockProducts.find((x) => x.id === Number(id));
                p ? resolve(p) : reject("Produto não encontrado");
            }, 300);
        });
    },

    create(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newP = { id: Date.now(), ...data };
                mockProducts.push(newP);
                resolve(newP);
            }, 300);
        });
    },

    update(id, data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const idx = mockProducts.findIndex((x) => x.id === Number(id));
                if (idx === -1) return reject("Produto não encontrado");

                mockProducts[idx] = { ...mockProducts[idx], ...data };
                resolve(mockProducts[idx]);
            }, 300);
        });
    },

    delete(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                mockProducts = mockProducts.filter((x) => x.id !== Number(id));
                resolve();
            }, 300);
        });
    },
};
