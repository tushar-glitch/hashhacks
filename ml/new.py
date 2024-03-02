1.
from pyhealth.datasets import MIMIC3Dataset

mimic3_ds = MIMIC3Dataset(
        root="https://storage.googleapis.com/pyhealth/Synthetic_MIMIC-III/",
        tables=["DIAGNOSES_ICD", "PROCEDURES_ICD", "PRESCRIPTIONS"],
        code_mapping={"NDC": ("ATC", {"target_kwargs": {"level": 3}})},
        dev=True
)
mimic3_ds.stat()

mimic3_ds.info()

2.
from pyhealth.tasks import drug_recommendation_mimic3_fn

mimic3_ds = mimic3_ds.set_task(task_fn=drug_recommendation_mimic3_fn)
# stats info
mimic3_ds.stat()
mimic3_ds.samples[0]

from pyhealth.datasets.splitter import split_by_patient
from pyhealth.datasets import split_by_patient, get_dataloader

# data split
train_dataset, val_dataset, test_dataset = split_by_patient(mimic3_ds, [0.8, 0.1, 0.1])

# create dataloaders (they are <torch.data.DataLoader> object)
train_loader = get_dataloader(train_dataset, batch_size=64, shuffle=True)
val_loader = get_dataloader(val_dataset, batch_size=64, shuffle=False)
test_loader = get_dataloader(test_dataset, batch_size=64, shuffle=False)

3.
from pyhealth.models import Transformer

model = Transformer(
    dataset=mimic3_ds,
    feature_keys=["conditions", "procedures"],
    label_key="drugs",
    mode="multilabel",
)

4.
from pyhealth.trainer import Trainer

trainer = Trainer(model=model)
trainer.train(
    train_dataloader=train_loader,
    val_dataloader=val_loader,
    epochs=3,
    monitor="pr_auc_samples",
)

5.
# option 1: use our built-in evaluation metric
score=trainer.evaluate(test_loader)
print(score)

# option 2: use our pyhealth.metrics to evaluate
from pyhealth.metrics.multilabel import multilabel_metrics_fn
y_true, y_prob, loss = trainer.inference(test_loader)
multilabel_metrics_fn(y_true, y_prob, metrics=["pr_auc_samples"])

6.
from pyhealth.medcode import InnerMap

icd9cm = InnerMap.load("ICD9CM")
icd9cm.lookup("428.0")
# `Congestive heart failure, unspecified`
icd9cm.get_ancestors("428.0")
# ['428', '420-429.99', '390-459.99', '001-999.99']

atc = InnerMap.load("ATC")
atc.lookup("M01AE51")
# `ibuprofen, combinations`
atc.lookup("M01AE51", "drugbank_id")
# `DB01050`
atc.lookup("M01AE51", "description")
# Ibuprofen is a non-steroidal anti-inflammatory drug (NSAID) derived ...
atc.lookup("M01AE51", "indication")
# Ibuprofen is the most commonly used and prescribed NSAID. It is very common over the ...

7.
from pyhealth.tokenizer import Tokenizer

# Example: we use a list of ATC3 code as the token
token_space = ['A01A', 'A02A', 'A02B', 'A02X', 'A03A', 'A03B', 'A03C', 'A03D', \
        'A03F', 'A04A', 'A05A', 'A05B', 'A05C', 'A06A', 'A07A', 'A07B', 'A07C', \
        'A12B', 'A12C', 'A13A', 'A14A', 'A14B', 'A16A']
tokenizer = Tokenizer(tokens=token_space, special_tokens=["<pad>", "<unk>"])

# 2d encode
tokens = [['A03C', 'A03D', 'A03E', 'A03F'], ['A04A', 'B035', 'C129']]
indices = tokenizer.batch_encode_2d(tokens)
# [[8, 9, 10, 11], [12, 1, 1, 0]]

# 2d decode
indices = [[8, 9, 10, 11], [12, 1, 1, 0]]
tokens = tokenizer.batch_decode_2d(indices)
# [['A03C', 'A03D', 'A03E', 'A03F'], ['A04A', '<unk>', '<unk>']]

# 3d encode
tokens = [[['A03C', 'A03D', 'A03E', 'A03F'], ['A08A', 'A09A']], \
    [['A04A', 'B035', 'C129']]]
indices = tokenizer.batch_encode_3d(tokens)
# [[[8, 9, 10, 11], [24, 25, 0, 0]], [[12, 1, 1, 0], [0, 0, 0, 0]]]

# 3d decode
indices = [[[8, 9, 10, 11], [24, 25, 0, 0]], \
    [[12, 1, 1, 0], [0, 0, 0, 0]]]
tokens = tokenizer.batch_decode_3d(indices)
# [[['A03C', 'A03D', 'A03E', 'A03F'], ['A08A', 'A09A']], [['A04A', '<unk>', '<unk>']]]


