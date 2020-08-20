require 'summary_report'

describe '#summary_report' do
  it 'returns Green: 1 for Green' do
    expect(summary_report("Green")).to eq("Green: 1")
  end

  it 'returns Green: 2 for Green, Green' do
    expect(summary_report("Green, Green")).to eq("Green: 2")
  end

  it 'returns Green: 2, Amber: 1 for Green, Green, Amber' do
    expect(summary_report("Green, Green, Amber")).to eq("Green: 2\nAmber: 1")
  end
end
