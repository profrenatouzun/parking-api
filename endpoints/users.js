/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Endpoints relacionados a usuários
 * /users:
 *   get:
 *     summary: Retorna a lista de usuários
 *     description: Obtém uma lista de todos os usuários cadastrados no sistema.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso.
 */

app.get('/users', (req, res) => {
  // #swagger.summary = 'Some summary...'
  res.json([{ id: 1, name: 'João' }, { id: 2, name: 'Maria' }]);
});