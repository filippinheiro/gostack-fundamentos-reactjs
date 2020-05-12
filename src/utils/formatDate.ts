const formatDate = (createdAt: Date): string =>
  createdAt.toLocaleDateString('pt-BR');
export default formatDate;
